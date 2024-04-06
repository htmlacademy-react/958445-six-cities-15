import { Navigate } from 'react-router-dom';

import { AppRoutesEnum } from '../../consts';
import { useIsAuthorized } from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateCheck(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const isAuthorized = useIsAuthorized();

  return isAuthorized ? children : <Navigate to={AppRoutesEnum.LOGIN} />;
}
