import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, NavBar, VideoForm } from './components';
import { Paths } from './enum';

export const App: FC = React.memo(() => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path={Paths.HomePage} component={HomePage} />
      <Route path={Paths.UploadPage} component={VideoForm} />
    </Switch>
  </BrowserRouter>
));
