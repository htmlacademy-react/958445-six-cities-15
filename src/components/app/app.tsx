import { useState } from 'react';
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
  const [activeCardId, setActiveCardId] = useState<string>('');

  return (
    <Routes>
      <Route path={AppRoutesEnum.HOME} element={<Layout />}>
        <Route
          index
          element={
            <MainPage
              {...props}
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
              <FavoritesPage {...props} />
            </PrivateCheck>
          }
        />
        <Route
          path={`${AppRoutesEnum.OFFER}/:id`}
          element={
            <OfferPage
              {...props}
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
