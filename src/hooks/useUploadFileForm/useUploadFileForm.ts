import { ChangeEvent, MouseEvent, useState } from 'react';
import { uploadVideo } from 'src/services';
import { ResponseType } from 'src/services/uploadVideo/types';
import { StatusCodes } from 'src/enum';
import { useCatchHandler } from 'src/hooks';
import { UseFormReturnType } from './types';
import { MAX_VIDEO_SIZE, TYPE_MP4 } from './constants';

export const useUploadFileForm = (): UseFormReturnType => {
  const [data, setData] = useState<ResponseType>({
    message: '',
    status: StatusCodes.Ok,
  });
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [file, setFile] = useState<string | Blob>('');
  const { errorMessage, setErrorMessage } = useCatchHandler();

  const handler = (e: ChangeEvent<HTMLInputElement>): void => {
    const FILES = e.target.files;
    const IS_VALID_FILE = (
      FILES && FILES[0].size <= MAX_VIDEO_SIZE && FILES[0].type === TYPE_MP4
    );

    if (FILES && IS_VALID_FILE) {
      setIsDisabled(false);
      setFile(FILES[0]);
    }
  };

  const sendVideoFile = async (
    e: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('video-file', file);

    try {
      const requestData = await uploadVideo(formData);

      if (typeof requestData === 'object') {
        setData(requestData);
      }
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return {
    data,
    isDisabled,
    errorMessage,
    handler,
    sendVideoFile,
  };
};
