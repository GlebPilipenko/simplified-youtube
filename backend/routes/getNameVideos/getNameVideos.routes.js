const { Router } = require('express');
const { endPoints: { nameVideos } } = require('../../constants/index.js');
const {
  getNameVideos,
} = require('../../controllers/getNameVideos/getNameVideosController.js');

const router = Router();

router.get(nameVideos, getNameVideos);

module.exports = router;
