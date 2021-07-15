import { ChangeEvent, MouseEvent } from 'react';
import { ResponseType } from 'src/services/uploadVideo/types';

export interface UseFormReturnType {
  data: ResponseType;
  isDisabled: boolean;
  errorMessage: string;
  handler: (e: ChangeEvent<HTMLInputElement>) => void;
  sendVideoFile: (e: MouseEvent<HTMLButtonElement>) => void;
}
