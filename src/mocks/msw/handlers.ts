import { rest } from 'msw';
import {
  BASE_URL_UPLOAD_VIDEO,
  BASE_URL_NAME_VIDEOS_URL,
  defaultUploadVideoResponse,
  defaultGetNameVideosResponse,
} from 'src/mocks/constants';

export const handlers = [
  rest.get(BASE_URL_NAME_VIDEOS_URL, (req, res, ctx) => res(
    ctx.status(200), ctx.json(defaultGetNameVideosResponse),
  )),
  rest.post(BASE_URL_UPLOAD_VIDEO, (req, res, ctx) => res(
    ctx.status(200), ctx.json({ defaultUploadVideoResponse }),
  )),
];
