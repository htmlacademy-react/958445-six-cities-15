import { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { logoutAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoutesEnum, AuthorizationStatusesEnum } from '../../consts';

type Props = Readonly<{
  withNav?: boolean;
}>;

export function Header({ withNav = false }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.curentUser);
  const signOut = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const isAuthorized = authorizationStatus === AuthorizationStatusesEnum.AUTH;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              to={AppRoutesEnum.HOME}
              className="header__logo-link header__logo-link--active"
            >
              <img
                width="81"
                height="41"
                src="img/logo.svg"
                alt="6 cities logo"
                className="header__logo"
              />
            </Link>
          </div>
          {withNav && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    to={AppRoutesEnum.LOGIN}
                    className="header__nav-link header__nav-link--profile"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>

                    {isAuthorized ? (
                      <span className="header__user-name user__name">
                        {currentUser?.email}
                      </span>
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
          )}
        </div>
      </div>
    </header>
  );
}
