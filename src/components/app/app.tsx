import { Route, Routes } from 'react-router-dom';

import { PrivateCheck } from '..';
import { Layout } from '../layout/layout';
import type { City, Offer } from '../../types';
import { AppRoutesEnum, AuthorizationStatusesEnum } from '../../consts';
import {
  MainPage,
  LoginPage,
  OfferPage,
  NotFoundPage,
  FavoritesPage,
} from '../../pages';

type Props = {
  city: City;
  offers: ReadonlyArray<Offer>;
};

export function App(props: Props): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoutesEnum.HOME} element={<Layout />}>
        <Route index element={<MainPage {...props} />} />
        <Route path={AppRoutesEnum.LOGIN} element={<LoginPage />} />
        <Route
          path={AppRoutesEnum.FAVORITES}
          element={
            <PrivateCheck authorizationStatus={AuthorizationStatusesEnum.AUTH}>
              <FavoritesPage {...props} />
            </PrivateCheck>
          }
        />
        <Route
          path={`${AppRoutesEnum.OFFER}/:id`}
          element={<OfferPage offers={props.offers} />}
        />
      </Route>
      <Route path={AppRoutesEnum.ROUTE_STAR} element={<NotFoundPage />} />
    </Routes>
  );
}
