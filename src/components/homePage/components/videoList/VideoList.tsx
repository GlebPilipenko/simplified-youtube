import React, { FC } from 'react';
import { VideoItem } from '../videoItem';
import { PropsType } from './types';
import './style/index.scss';

export const VideoList: FC<PropsType> = React.memo(({ files: filePaths }) => (
  <>
    {filePaths && filePaths.map((path: string, index: number) => {
      const url = `${process.env.REACT_APP_GET_STATIC_FILES}${path}`;
      const key = `${url}${index + 1}`;

      return (
        <div key={key} className="video-list">
          <VideoItem url={url} />
        </div>
      );
    })}
  </>
));
