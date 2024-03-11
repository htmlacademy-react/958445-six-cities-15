import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { Offer } from '../../types';
import { AuthorizationStatusesEnum } from '../../consts';
import { Favorites, Header, PrivateCheck } from '../../components';

type Props = {
  offers: ReadonlyArray<Offer>;
};

export function FavoritesPage({ offers }: Props): JSX.Element {
  return (
    <Fragment>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <PrivateCheck authorizationStatus={AuthorizationStatusesEnum.AUTH}>
        <div className="page">
          <Header withNav />

          <main className="page__main page__main--favorites">
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
          </main>
          <footer className="footer container">
            <a className="footer__logo-link" href="main.html">
              <img
                width="64"
                height="33"
                alt="6 cities logo"
                src="img/logo.svg"
                className="footer__logo"
              />
            </a>
          </footer>
        </div>
      </PrivateCheck>
    </Fragment>
  );
}
