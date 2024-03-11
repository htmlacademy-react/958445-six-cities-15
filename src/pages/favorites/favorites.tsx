import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { Offer } from '../../types';
import { AuthorizationStatusesEnum } from '../../consts';
import { Favorites, PrivateCheck } from '../../components';

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
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <a className="header__logo-link" href="main.html">
                    <img
                      width="81"
                      height="41"
                      src="img/logo.svg"
                      alt="6 cities logo"
                      className="header__logo"
                    />
                  </a>
                </div>
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <a
                        className="header__nav-link header__nav-link--profile"
                        href="#"
                      >
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__user-name user__name">
                          Oliver.conner@gmail.com
                        </span>
                        <span className="header__favorite-count">3</span>
                      </a>
                    </li>
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="#">
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>

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
