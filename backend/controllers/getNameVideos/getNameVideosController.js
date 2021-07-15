const fs = require('fs').promises;
const {
  db,
  messages: { noVideoOnServer },
  status: { ok, notFound },
} = require('../../constants/index.js');

// eslint-disable-next-line consistent-return
exports.getNameVideos = async (req, res) => {
  try {
    const files = await fs.readdir(db);

    if (!files.length) {
      return res.status(ok).json({
        files,
        message: noVideoOnServer,
        status: notFound,
      });
    }

    return res.status(ok).json({
      files,
      message: '',
      status: ok,
    });
  } catch (err) {
    res.status(notFound).json({
      message: err.message,
      status: notFound,
    });
  }
};
