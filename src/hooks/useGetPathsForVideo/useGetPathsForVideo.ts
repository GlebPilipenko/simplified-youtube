import { useEffect, useState } from 'react';
import { getNameVideos } from 'src/services';
import { StatusCodes } from 'src/enum';
import { ResponseType } from 'src/services/getNameVideos/types';
import { useCatchHandler } from 'src/hooks';
import { useGetPathsForVideoReturnType } from './types';

export const useGetPathsForVideo = (): useGetPathsForVideoReturnType => {
  const [data, setData] = useState<ResponseType>({
    files: [],
    message: '',
    status: StatusCodes.Processing,
  });
  const { errorMessage, setErrorMessage } = useCatchHandler();

  useEffect(() => {
    (async () => {
      try {
        const requestData = await getNameVideos();

        if (typeof requestData === 'object') {
          setData(requestData);
        }
      } catch (err) {
        setErrorMessage(err.message);
      }
    })();
  }, [errorMessage, setErrorMessage]);

  return { data, errorMessage };
};
