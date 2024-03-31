import { FormEvent, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../store/api-actions';
import { AppRoutesEnum } from '../../consts';

export function LoginPage(): JSX.Element {
  const loginRef = useRef<null | HTMLInputElement>(null);
  const passwordRef = useRef<null | HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(
        loginAction({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        })
      );
      navigate(AppRoutesEnum.HOME);
    }
  };

  return (
    <div className="page__login-container container">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form
          className="login__form form"
          action="#"
          method="post"
          onSubmit={handleSubmit}
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
