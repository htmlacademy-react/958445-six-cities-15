import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { Header } from '../../components';

export function LoginPage(): JSX.Element {
  return (
    <Fragment>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="page page--gray page--login">
        <Header />

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post">
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="login__input form__input"
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    required
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="login__input form__input"
                  />
                </div>
                <button
                  className="login__submit form__submit button"
                  type="submit"
                >
                  Sign in
                </button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </Fragment>
  );
}
