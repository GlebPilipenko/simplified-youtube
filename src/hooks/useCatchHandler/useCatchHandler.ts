import { useState } from 'react';
import { useCatchHandlerReturnType } from './types';

export const useCatchHandler = (): useCatchHandlerReturnType => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  return { errorMessage, setErrorMessage };
};
