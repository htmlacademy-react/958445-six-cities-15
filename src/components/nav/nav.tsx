import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AppRoutesEnum } from '../../consts';
import { getCurentUser } from '../../store/user/selectors';
import { getFavorites } from '../../store/offers/selectors';
import { loadFavoritesAction, logoutAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector, useIsAuthorized } from '../../hooks';

export function Nav() {
  const dispatch = useAppDispatch();
  const isAuthorized = useIsAuthorized();
  const favorites = useAppSelector(getFavorites);
  const currentUser = useAppSelector(getCurentUser);
  const signOut = () => {
    dispatch(logoutAction());
  };

  useEffect(() => {
    dispatch(loadFavoritesAction());
  }, [dispatch]);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={isAuthorized ? AppRoutesEnum.HOME : AppRoutesEnum.LOGIN}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>

            {isAuthorized ? (
              <>
                <span className="header__user-name user__name">
                  {currentUser?.email}
                </span>
                {favorites.length > 0 && (
                  <span className="header__favorite-count">
                    {favorites.length}
                  </span>
                )}
              </>
            ) : (
              <span className="header__login">Sign in</span>
            )}
          </Link>
        </li>
        {isAuthorized && (
          <li className="header__nav-item">
            <a className="header__nav-link" onClick={signOut}>
              <span className="header__signout">Sign out</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
