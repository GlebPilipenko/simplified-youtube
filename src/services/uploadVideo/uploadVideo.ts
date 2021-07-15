import { UPLOAD } from 'src/services/constants';
import { apiServices } from 'src/services/apiServices';
import { AxiosResponse } from 'axios';
import { ResponseType } from './types';

export const uploadVideo = (
  formData?: FormData,
): Promise<string | ResponseType> => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  return apiServices
    .post<ResponseType>(UPLOAD, formData, config)
    .then((response: AxiosResponse<ResponseType>) => response.data)
    .catch((e: Error) => e.message);
};
