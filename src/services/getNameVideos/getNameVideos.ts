import { AxiosResponse } from 'axios';
import { apiServices } from 'src/services/apiServices';
import { NAME_VIDEOS } from '../constants';
import { ResponseType } from './types';

export const getNameVideos = (): Promise<string | ResponseType> => apiServices
  .get<ResponseType>(NAME_VIDEOS)
  .then((response: AxiosResponse<ResponseType>) => response.data)
  .catch((e: Error) => e.message);
