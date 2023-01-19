import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { HotelCollectionScene, HotelScene } from 'scenes';
import { CharacterContainer } from 'pods/hotel';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.hotelCollection]}
          component={HotelCollectionScene}
        />
        <Route
          exact={true}
          path={switchRoutes.createHotel}
          component={HotelScene}
        />
        <Route
          exact={true}
          path={switchRoutes.editHotel}
          component={HotelScene}
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
