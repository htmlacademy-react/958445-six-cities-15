import { Link } from 'react-router-dom';

import { AppRoutesEnum } from '../../consts';

export function Footer() {
  return (
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
  );
}
