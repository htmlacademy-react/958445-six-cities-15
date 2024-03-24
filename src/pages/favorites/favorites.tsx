import { Helmet } from 'react-helmet-async';

import { useAppSelector } from '../../hooks';
import { Favorites, Locations } from '../../components';
import { CITIES } from '../../mocks';

export function FavoritesPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);

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
              {CITIES.map((item) => (
                <Locations.Item key={item.name} city={item} />
              ))}
            </div>
            <Favorites offers={offers} />
          </li>
        </ul>
      </section>
    </div>
  );
}
