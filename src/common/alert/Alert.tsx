import { FC } from 'react';
import { PropsType } from './types';

export const Alert: FC<PropsType> = ({
  message,
  typeOfAlert,
  changeWidth = false,
}) => (
  <div
    role="alert"
    className={`alert alert-${typeOfAlert}`}
    style={{
      maxWidth: changeWidth ? '50%' : '100%',
      margin: '0 auto',
    }}
  >
    {message}
  </div>
);
