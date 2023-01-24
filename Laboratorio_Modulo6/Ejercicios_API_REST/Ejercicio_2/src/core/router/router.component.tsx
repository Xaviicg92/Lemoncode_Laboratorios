import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { HotelCollectionScene, HotelScene } from 'scenes';

import { SentenceContainer } from 'pods/sentence/sentence.container';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.characterCollection]}
          component={HotelCollectionScene}
        />

        <Route
          exact={true}
          path={switchRoutes.editSentence}
          component={SentenceContainer}
        />

        <Route
          exact={true}
          path={switchRoutes.details}
          component={HotelScene}
        />
      </Switch>
    </HashRouter>
  );
};
