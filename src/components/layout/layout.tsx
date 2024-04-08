import cn from 'classnames';
import { Link, Outlet, matchPath, useLocation } from 'react-router-dom';

import { Header } from '..';
import { AppRoutesEnum } from '../../consts';
import { useAppSelector } from '../../hooks';
import { getSelectedOffers } from '../../pages/main/utils';
import { getFavorites } from '../../store/offers/selectors';

export function Layout(): JSX.Element {
  const { pathname } = useLocation();
  const favorites = useAppSelector(getFavorites);
  const offers = useAppSelector(getSelectedOffers);
  const isHome = matchPath(pathname, AppRoutesEnum.HOME) !== null;
  const isLogin = matchPath(pathname, AppRoutesEnum.LOGIN) !== null;
  const isOffer = matchPath(pathname, AppRoutesEnum.OFFER) !== null;
  const isFavorites = matchPath(pathname, AppRoutesEnum.FAVORITES) !== null;

  return (
    <div
      className={cn('page', {
        ['page--main']: isHome || isFavorites,
        ['page--login']: isLogin,
        ['page--gray']: isHome || isLogin,
        ['page--favorites-empty']: isFavorites && favorites.length === 0,
      })}
    >
      <Header withNav={!isLogin} />
      <main
        className={cn('page__main', {
          ['page__main--index']: isHome,
          ['page__main--offer']: isOffer,
          ['page__main--login']: isLogin,
          ['page__main--favorites']: isFavorites,
          ['page__main--index-empty']: isHome && offers.length === 0,
          ['page__main--favorites-empty']:
            isFavorites && favorites.length === 0,
        })}
      >
        <Outlet />
      </main>
      {isFavorites && (
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoutesEnum.HOME}>
            <img
              width="64"
              height="33"
              alt="6 cities logo"
              src="img/logo.svg"
              className="footer__logo"
            />
          </Link>
        </footer>
      )}
    </div>
  );
}
