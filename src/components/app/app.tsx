import { Route, Routes } from 'react-router-dom';

import { Layout } from '../layout/layout';
import { PrivateCheck, Spinner } from '..';
import { useAppSelector } from '../../hooks';
import { AppRoutesEnum, AuthorizationStatusesEnum } from '../../consts';
import {
  getAuthorizationStatus,
  getCity,
  getIsLoading,
  getOffers,
} from '../../store/selectors';
import {
  MainPage,
  LoginPage,
  OfferPage,
  NotFoundPage,
  FavoritesPage,
} from '../../pages';

export function App(): JSX.Element {
  const city = useAppSelector(getCity);
  const offers = useAppSelector(getOffers).filter(
    (item) => item.city.name === city.name
  );
  const isDataLoading = useAppSelector(getIsLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (
    authorizationStatus === AuthorizationStatusesEnum.UNKNOWN ||
    isDataLoading
  ) {
    return <Spinner />;
  }

  return (
    <Routes>
      <Route path={AppRoutesEnum.HOME} element={<Layout />}>
        <Route index element={<MainPage offers={offers} />} />
        <Route path={AppRoutesEnum.LOGIN} element={<LoginPage />} />
        <Route
          path={AppRoutesEnum.FAVORITES}
          element={
            <PrivateCheck>
              <FavoritesPage />
            </PrivateCheck>
          }
        />
        <Route
          path={`${AppRoutesEnum.OFFER}/:id`}
          element={<OfferPage offers={offers} />}
        />
      </Route>
      <Route path={AppRoutesEnum.ROUTE_STAR} element={<NotFoundPage />} />
    </Routes>
  );
}
