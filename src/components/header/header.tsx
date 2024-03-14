import { Link } from 'react-router-dom';

import { AppRoutesEnum } from '../../consts';

type Props = Readonly<{
  withNav?: boolean;
}>;

export function Header({ withNav = false }: Props): JSX.Element {
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
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
