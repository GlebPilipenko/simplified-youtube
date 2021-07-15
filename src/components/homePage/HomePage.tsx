import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import './style/index.scss';
import { DANGER, ERROR_MESSAGE, WARNING } from 'src/constants';
import {
  LOADING,
  NO_VIDEO_IN_SERVER,
  UPLOAD_AT_LEAST_ONE_VIDEO,
} from 'src/components/homePage/constants';
import { Alert } from 'src/common';
import { useGetPathsForVideo } from 'src/hooks';
import { StatusCodes } from 'src/enum';
import { VideoList } from './components';

export const HomePage: FC = React.memo(() => {
  const {
    data: { files, message, status }, errorMessage,
  } = useGetPathsForVideo();

  if (errorMessage.length > 0) {
    return (
      <Alert
        changeWidth
        typeOfAlert={DANGER}
        message={ERROR_MESSAGE}
      />
    );
  }

  if (!files.length && status === StatusCodes.Processing) {
    return (
      <Alert
        changeWidth
        message={LOADING}
        typeOfAlert={WARNING}
      />
    );
  }

  if (message === NO_VIDEO_IN_SERVER && status === StatusCodes.NotFound) {
    return (
      <Alert
        changeWidth
        typeOfAlert={WARNING}
        message={UPLOAD_AT_LEAST_ONE_VIDEO}
      />
    );
  }

  return (
    <Container className="video-container">
      <VideoList files={files} />
    </Container>
  );
});
