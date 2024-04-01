import { FormEvent, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import { removeError } from '../../store/action';
import { getErrors } from '../../store/selectors';
import { loginAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';

export function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const errors = useAppSelector(getErrors);
  const loginRef = useRef<null | HTMLInputElement>(null);
  const passwordRef = useRef<null | HTMLInputElement>(null);

  const handleChange = (
    evt: FormEvent<HTMLFormElement> & { target: HTMLFormElement }
  ) => {
    if (evt.target.name) {
      dispatch(removeError(evt.target.name));
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(
        loginAction({
          navigate,
          login: loginRef.current.value,
          password: passwordRef.current.value,
        })
      );
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
          action="#"
          method="post"
          onChange={handleChange}
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
            {errors['email']?.map((item) => (
              <>
                - <span key={item}>{item}</span>
                <br />
              </>
            ))}
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
            {errors['password']?.map((item) => (
              <>
                - <span key={item}>{item}</span>
                <br />
              </>
            ))}
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
