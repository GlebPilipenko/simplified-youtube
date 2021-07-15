import React, { FC, MouseEvent } from 'react';
import './style/index.scss';
import { Alert } from 'src/common';
import { useHideAlert, useUploadFileForm } from 'src/hooks';
import { DANGER, ERROR_MESSAGE } from 'src/constants';
import { SEND_FILE, UPLOAD_FILE } from './constants';

export const VideoForm: FC = React.memo(() => {
  const {
    data: { message },
    isDisabled,
    errorMessage,
    handler,
    sendVideoFile,
  } = useUploadFileForm();
  const { typeOfAlert, notificationMessage } = useHideAlert(message);

  const renderAlert = notificationMessage.length > 0 && (
    <Alert
      typeOfAlert={typeOfAlert}
      message={notificationMessage}
    />
  );

  if (errorMessage.length > 0) {
    return <Alert message={ERROR_MESSAGE} typeOfAlert={DANGER} />;
  }

  return (
    <form>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <label className="custom-upload">
              {UPLOAD_FILE}
              <input
                type="file"
                onChange={handler}
                id="exampleFormControlFile1"
                className="form-control-file"
                accept="video/mp4"
              />
            </label>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e: MouseEvent<HTMLButtonElement>) => sendVideoFile(e)}
              disabled={isDisabled}
            >
              {SEND_FILE}
            </button>
            {renderAlert}
          </div>
        </div>
      </div>
    </form>
  );
});
