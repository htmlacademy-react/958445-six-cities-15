import { Helmet } from 'react-helmet-async';

import { Favorites, Locations } from '../../components';
import { useAppSelector } from '../../hooks';
import { useMemo } from 'react';

export function FavoritesPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const cities = useMemo(() => offers.map((item) => item.city), [offers]);

  return (
    <div className="page__favorites-container container">
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              {cities.map((item) => (
                <Locations.Item key={item.name} name={item.name} />
              ))}
            </div>
            <Favorites offers={offers} />
          </li>
        </ul>
      </section>
    </div>
  );
}
