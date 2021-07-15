import ReactPlayer from 'react-player';
import React, { FC } from 'react';
import { PropsType } from './types';

export const VideoItem: FC<PropsType> = React.memo(({ url }) => (
  <ReactPlayer
    controls
    url={url}
    width={355}
    height={200}
  />
));
