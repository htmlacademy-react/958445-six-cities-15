import { Helmet } from 'react-helmet-async';

export function LoginPage(): JSX.Element {
  return (
    <div className="page__login-container container">
      <Helmet>
        <title>Login</title>
      </Helmet>
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
          <button className="login__submit form__submit button" type="submit">
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
  );
}
