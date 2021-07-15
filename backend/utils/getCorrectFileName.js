const { mp4 } = require('../constants/index.js');

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getCorrectFileName = (originalName) => {
  const nameWithCurrentDate = `${originalName}`.split(mp4)[0];

  return `${nameWithCurrentDate.trim().split(' ').join('_')}${mp4}`;
};

module.exports = getCorrectFileName;
