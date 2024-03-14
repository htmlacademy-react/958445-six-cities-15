import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { Offer } from '../../types';
import { Favorites } from '../../components';

type Props = {
  offers: ReadonlyArray<Offer>;
};

export function FavoritesPage({ offers }: Props): JSX.Element {
  return (
    <Fragment>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <div className="page__favorites-container container">
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
              <Favorites offers={offers} />
            </li>
          </ul>
        </section>
      </div>
    </Fragment>
  );
}
