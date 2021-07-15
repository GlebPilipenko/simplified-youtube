import { useEffect, useState } from 'react';
import { SUCCESS, WARNING } from 'src/constants';
import { FILE_IS_DOWNLOAD, ONLY_MP4 } from './constants';
import { UseHideAlertReturnType } from './types';

export const useHideAlert = (message: string): UseHideAlertReturnType => {
  const [typeOfAlert, setTypeOfAlert] = useState<string>('');
  const [notificationMessage, setNotificationMessage] = useState<string>('');

  useEffect(() => {
    const timeId = setTimeout(() => setNotificationMessage(''), 3000);

    if (message === ONLY_MP4) {
      setTypeOfAlert(WARNING);
      return setNotificationMessage(message);
    }

    if (message === FILE_IS_DOWNLOAD) {
      setTypeOfAlert(SUCCESS);
      return setNotificationMessage(message);
    }

    return () => clearTimeout(timeId);
  }, [message, setNotificationMessage]);

  return { typeOfAlert, notificationMessage };
};
