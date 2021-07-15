const { Router } = require('express');
const {
  endPoints: { uploadVideo: uploadVideoEndPoint },
} = require('../../constants/index.js');
const {
  uploadVideo,
} = require('../../controllers/uploadVideo/uploadVideoController.js');

const router = Router();

router.post(uploadVideoEndPoint, uploadVideo);

module.exports = router;
