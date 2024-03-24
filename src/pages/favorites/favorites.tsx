import { Helmet } from 'react-helmet-async';

import type { Offer } from '../../types';
import { Favorites } from '../../components';

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
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </div>
            <Favorites {...props} />
          </li>
        </ul>
      </section>
    </div>
  );
}
