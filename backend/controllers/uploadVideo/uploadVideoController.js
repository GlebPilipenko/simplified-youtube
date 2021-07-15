const multer = require('multer');
const getCorrectFileName = require('../../utils/getCorrectFileName.js');
const {
  db,
  keyFromFormData,
  messages: { fileIsDownload },
  validate: { isMp4, onlyMp4 },
  status: { successful, badRequest },
} = require('../../constants/index.js');

const storage = multer.diskStorage({
  destination: db,
  filename: (req, file, cb) => cb(null, getCorrectFileName(file.originalname)),
});

const upload = multer({
  storage,
  // eslint-disable-next-line consistent-return
  fileFilter: (req, file, cb) => {
    if (file.mimetype === isMp4) {
      return cb(null, true);
    }
    cb(null, false);
  },
});

const uploadVideoController = upload.single(keyFromFormData);

exports.uploadVideo = async (req, res) => {
  // eslint-disable-next-line consistent-return
  uploadVideoController(req, res, (err) => {
    try {
      if (err) {
        return res.status(successful).json({
          message: onlyMp4,
          status: badRequest,
        });
      }

      return res.status(successful).json({
        message: fileIsDownload,
        status: successful,
      });
    } catch (error) {
      res.status(badRequest).json({
        message: error.message,
        status: badRequest,
      });
    }
  });
};
