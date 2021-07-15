import { NAME_VIDEOS, UPLOAD } from 'src/services/constants';

export const BASE_URL_NAME_VIDEOS_URL = `
${process.env.REACT_APP_BACKEND_BASE_URL}${NAME_VIDEOS}
`;
export const BASE_URL_UPLOAD_VIDEO = `
${process.env.REACT_APP_BACKEND_BASE_URL}${UPLOAD}
`;
