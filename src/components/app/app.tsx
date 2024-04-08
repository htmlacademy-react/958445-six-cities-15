import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateCheck, Spinner } from '..';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { getIsOffersDataLoading } from '../../store/offers/selectors';
import { AppRoutesEnum, AuthorizationStatusesEnum } from '../../consts';
import { checkAuthAction, loadOffersAction } from '../../store/api-actions';
import {
  MainPage,
  LoginPage,
  OfferPage,
  NotFoundPage,
  FavoritesPage,
} from '../../pages';

export function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const isDataLoading = useAppSelector(getIsOffersDataLoading);
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
      <Route path={AppRoutesEnum.HOME} element={<MainPage />} />
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
      <Route path={AppRoutesEnum.ROUTE_STAR} element={<NotFoundPage />} />
    </Routes>
  );
}
