import { Route, Routes } from 'react-router-dom';

import { Layout } from '../Layout';
import { Offer } from '../../types';
import { NotFound } from '../NotFound';
import { AppRoutesEnum } from '../../consts';
import { FavoritesPage, LoginPage, MainPage, OfferPage } from '../../pages';

type Props = {
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
          element={<FavoritesPage {...props} />}
        />
        <Route path={`${AppRoutesEnum.OFFER}/:id`} element={<OfferPage />} />
      </Route>
      <Route path={AppRoutesEnum.ROUTE_STAR} element={<NotFound />} />
    </Routes>
  );
}
