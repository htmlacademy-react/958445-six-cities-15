import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import styles from './styles.module.scss';
import { AppRoutesEnum } from '../../consts';

export function NotFoundPage() {
  return (
    <div className={styles.notFound}>
      <Helmet>
        <title>Not found</title>
      </Helmet>
      Page not Found <sub>404</sub>
      <br />
      <Link className={styles.link} to={AppRoutesEnum.HOME}>
        Go home
      </Link>
    </div>
  );
}
