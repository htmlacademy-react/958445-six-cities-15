import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateCheck } from '..';
import { Layout } from '../layout/layout';
import { CITIES, OFFERS } from '../../mocks';
import { setOffers } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoutesEnum, AuthorizationStatusesEnum } from '../../consts';
import {
  MainPage,
  LoginPage,
  OfferPage,
  NotFoundPage,
  FavoritesPage,
} from '../../pages';

export function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const [activeCardId, setActiveCardId] = useState<string>('');

  useEffect(() => {
    dispatch(setOffers(OFFERS.filter((item) => item.city.name === city.name)));
  }, [city, dispatch]);

  return (
    <Routes>
      <Route path={AppRoutesEnum.HOME} element={<Layout />}>
        <Route
          index
          element={
            <MainPage
              city={city}
              offers={offers}
              cities={CITIES}
              activeCardId={activeCardId}
              setActiveCardId={setActiveCardId}
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
              offers={offers}
              activeCardId={activeCardId}
              setActiveCardId={setActiveCardId}
            />
          }
        />
      </Route>
      <Route path={AppRoutesEnum.ROUTE_STAR} element={<NotFoundPage />} />
    </Routes>
  );
}
