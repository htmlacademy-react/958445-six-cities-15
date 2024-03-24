import { useState } from 'react';
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
  const [activeCardId, setActiveCardId] = useState<string>('');

  return (
    <Routes>
      <Route path={AppRoutesEnum.HOME} element={<Layout />}>
        <Route
          index
          element={
            <MainPage
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
              <FavoritesPage />
            </PrivateCheck>
          }
        />
        <Route
          path={`${AppRoutesEnum.OFFER}/:id`}
          element={
            <OfferPage
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
