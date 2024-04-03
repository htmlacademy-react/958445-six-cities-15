import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '../layout/layout';
import { PrivateCheck, Spinner } from '..';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoutesEnum, AuthorizationStatusesEnum } from '../../consts';
import { checkAuthAction, loadOffersAction } from '../../store/api-actions';
import { getIsLoading, getAuthorizationStatus } from '../../store/selectors';
import {
  MainPage,
  LoginPage,
  OfferPage,
  NotFoundPage,
  FavoritesPage,
} from '../../pages';

export function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const isDataLoading = useAppSelector(getIsLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadOffersAction());
  }, [dispatch]);

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
