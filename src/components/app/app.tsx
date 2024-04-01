import { Route, Routes } from 'react-router-dom';

import { Layout } from '../layout/layout';
import { PrivateCheck, Spinner } from '..';
import { useAppSelector } from '../../hooks';
import { AppRoutesEnum, AuthorizationStatusesEnum } from '../../consts';
import {
  MainPage,
  LoginPage,
  OfferPage,
  NotFoundPage,
  FavoritesPage,
} from '../../pages';

export function App(): JSX.Element {
  const isDataLoading = useAppSelector((state) => state.isDataLoading);
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  if (
    authorizationStatus === AuthorizationStatusesEnum.UNKNOWN ||
    isDataLoading
  ) {
    return <Spinner />;
  }

  return (
    <Routes>
      <Route path={AppRoutesEnum.HOME} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={AppRoutesEnum.LOGIN} element={<LoginPage />} />
        <Route
          path={AppRoutesEnum.FAVORITES}
          element={
            <PrivateCheck>
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
