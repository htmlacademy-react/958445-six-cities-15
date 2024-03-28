import { Route, Routes } from 'react-router-dom';

import { PrivateCheck } from '..';
import { Layout } from '../layout/layout';
import { AppRoutesEnum, AuthorizationStatusesEnum } from '../../consts';
import {
  MainPage,
  LoginPage,
  OfferPage,
  NotFoundPage,
  FavoritesPage,
} from '../../pages';

export function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoutesEnum.HOME} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={AppRoutesEnum.LOGIN} element={<LoginPage />} />
        <Route
          path={AppRoutesEnum.FAVORITES}
          element={
            <PrivateCheck authorizationStatus={AuthorizationStatusesEnum.AUTH}>
              <FavoritesPage />
            </PrivateCheck>
          }
        />
        <Route path={`${AppRoutesEnum.OFFER}/:id`} element={<OfferPage />} />
      </Route>
      <Route path={AppRoutesEnum.ROUTE_STAR} element={<NotFoundPage />} />
    </Routes>
  );
}
