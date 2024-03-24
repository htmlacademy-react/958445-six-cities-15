import { Helmet } from 'react-helmet-async';

import { CITIES } from '../../mocks';
import type { Offer } from '../../types';
import { Favorites, Locations } from '../../components';

type Props = Readonly<{
  offers: Offer[];
}>;

export function FavoritesPage(props: Props): JSX.Element {
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
            <Favorites {...props} />
          </li>
        </ul>
      </section>
    </div>
  );
}
