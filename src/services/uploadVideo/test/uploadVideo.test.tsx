import { defaultUploadVideoResponse } from 'src/mocks/constants';
import { ResponseType } from 'src/services/uploadVideo/types';
import { uploadVideo } from '../uploadVideo';

describe('uploadVideo', () => {
  it('return correct response', async () => {
    const result: string | ResponseType = await uploadVideo();

    expect(result).toEqual({ defaultUploadVideoResponse });
  });
});
