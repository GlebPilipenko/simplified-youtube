import { renderHook } from '@testing-library/react-hooks';
import { StatusCodes } from 'src/enum';
import { useUploadFileForm } from '../useUploadFileForm';

describe('useGetPathsForVideo', () => {
  it('should return correct object', () => {
    const { result } = renderHook(() => useUploadFileForm());

    expect(result.current.data)
      .toEqual({ message: '', status: StatusCodes.Ok });
  });
});
