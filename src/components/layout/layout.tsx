import classNames from 'classnames';
import { Outlet, matchPath, useLocation } from 'react-router-dom';

import { Header } from '..';
import { AppRoutesEnum } from '../../consts';

export function Layout(): JSX.Element {
  const { pathname } = useLocation();
  const isHome = matchPath(pathname, AppRoutesEnum.HOME) !== null;
  const isLogin = matchPath(pathname, AppRoutesEnum.LOGIN) !== null;
  const isOffer = matchPath(pathname, AppRoutesEnum.OFFER) !== null;
  const isFavorites = matchPath(pathname, AppRoutesEnum.FAVORITES) !== null;

  return (
    <div
      className={classNames('page', {
        ['page--main']: isHome,
        ['page--login']: isLogin,
        ['page--gray']: isHome || isLogin,
      })}
    >
      <Header withNav={!isLogin} />
      <main
        className={classNames('page__main', {
          ['page__main--index']: isHome,
          ['page__main--offer']: isOffer,
          ['page__main--login']: isLogin,
          ['page__main--favorites']: isFavorites,
        })}
      >
        <Outlet />
      </main>
      {isFavorites && (
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
      )}
    </div>
  );
}
