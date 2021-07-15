import { renderHook } from '@testing-library/react-hooks';
import { defaultGetNameVideosResponse } from 'src/mocks/constants';
import { useGetPathsForVideo } from '../useGetPathsForVideo';

describe('useGetPathsForVideo', () => {
  it('should return correct answer from msw server', async () => {
    const {
      result, waitForNextUpdate,
    } = renderHook(() => useGetPathsForVideo());

    await waitForNextUpdate();

    expect(result.current.data.files)
      .toHaveLength(defaultGetNameVideosResponse.files.length);
  });
});
