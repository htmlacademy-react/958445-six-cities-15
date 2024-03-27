import { Route, Routes } from 'react-router-dom';

import { PrivateCheck } from '..';
import { CITIES } from '../../mocks';
import { Layout } from '../layout/layout';
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
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  return (
    <Routes>
      <Route path={AppRoutesEnum.HOME} element={<Layout />}>
        <Route
          index
          element={
            <MainPage
              city={city}
              cities={CITIES}
              offers={offers.filter((item) => item.city.name === city.name)}
            />
          }
        />
        <Route path={AppRoutesEnum.LOGIN} element={<LoginPage />} />
        <Route
          path={AppRoutesEnum.FAVORITES}
          element={
            <PrivateCheck authorizationStatus={AuthorizationStatusesEnum.AUTH}>
              <FavoritesPage offers={offers} />
            </PrivateCheck>
          }
        />
        <Route
          path={`${AppRoutesEnum.OFFER}/:id`}
          element={
            <OfferPage
              city={city}
              offers={offers.filter((item) => item.city.name === city.name)}
            />
          }
        />
      </Route>
      <Route path={AppRoutesEnum.ROUTE_STAR} element={<NotFoundPage />} />
    </Routes>
  );
}
