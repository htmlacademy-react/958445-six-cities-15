import { FormEvent, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';

import { loginAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { AppRoutesEnum, AuthorizationStatusesEnum } from '../../consts';

export function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const loginRef = useRef<null | HTMLInputElement>(null);
  const passwordRef = useRef<null | HTMLInputElement>(null);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(
        loginAction({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
  };

  return authorizationStatus === AuthorizationStatusesEnum.AUTH ? (
    <Navigate to={AppRoutesEnum.HOME} />
  ) : (
    <div className="page__login-container container">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form
          action="#"
          method="post"
          onSubmit={handleSubmit}
          className="login__form form"
        >
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input
              required
              type="email"
              name="email"
              ref={loginRef}
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
              ref={passwordRef}
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
