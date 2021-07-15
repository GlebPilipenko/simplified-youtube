import { renderHook } from '@testing-library/react-hooks';
import { SUCCESS, WARNING } from 'src/constants';
import { FILE_IS_DOWNLOAD, ONLY_MP4 } from '../constants';
import { useHideAlert } from '../useHideAlert';

describe('useHideAlert', () => {
  it('return typeOfAlert equal WARNING', () => {
    const { result } = renderHook(() => useHideAlert(ONLY_MP4));

    expect(result.current.typeOfAlert).toEqual(WARNING);
  });

  it('return typeOfAlert equal FILE_IS_DOWNLOAD', () => {
    const { result } = renderHook(() => useHideAlert(FILE_IS_DOWNLOAD));

    expect(result.current.typeOfAlert).toEqual(SUCCESS);
  });
});
