import { ResponseType } from 'src/services/getNameVideos/types';
import { defaultGetNameVideosResponse } from 'src/mocks/constants';
import { getNameVideos } from '../getNameVideos';

describe('getNameVideos', () => {
  it('return correct response', async () => {
    const result: string | ResponseType = await getNameVideos();
    expect(result).toEqual(defaultGetNameVideosResponse);
  });
});
