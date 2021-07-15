const serverConstants = {
  mp4: '.mp4',
  db: './db/video/',
  keyFromFormData: 'video-file',
  endPoints: {
    nameVideos: '/nameVideos',
    uploadVideo: '/upload',
  },
  messages: {
    noVideoOnServer: 'No video on server...',
    fileIsDownload: 'File is download...',
  },
  validate: {
    isMp4: 'video/mp4',
    onlyMp4: 'Only .mp4',
  },
  status: {
    ok: 200,
    successful: 201,
    badRequest: 400,
    notFound: 404,
  },
};

module.exports = serverConstants;
