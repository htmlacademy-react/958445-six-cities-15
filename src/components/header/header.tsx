import { Link } from 'react-router-dom';

import { Nav } from '../nav/nav';
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
          {withNav && <Nav />}
        </div>
      </div>
    </header>
  );
}
