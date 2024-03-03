import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import styles from './styles.module.scss';
import { AppRoutesEnum } from '../../consts';

export function NotFound() {
  return (
    <Fragment>
      <Helmet>
        <title>Not found</title>
      </Helmet>
      <div className={styles.NotFound}>
        Page not Found{' '}
        <Link className={styles.link} to={AppRoutesEnum.HOME}>
          Go home
        </Link>
      </div>
    </Fragment>
  );
}
