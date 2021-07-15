const cors = require('cors');
const express = require('express');
const config = require('config');
const home = require('../routes/getNameVideos/getNameVideos.routes.js');
const sendVideo = require('../routes/uploadVideo/uploadVideo.routes.js');

const app = express();

const PORT = config.get('port') || 8000;

app.use(cors());
app.use('/mp4', express.static('db/video'));

app.use('/api', sendVideo);
app.use('/api', home);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening on ${PORT} port...`);
    });
  } catch (e) {
    console.log('Server worked with error', e.message);
    process.exit(0);
  }
}

process.on('unhandledRejection', (e) => {
  console.log(`Error: ${e.message}`);
  process.exit(0);
});

start();
