import { Navigate } from 'react-router-dom';

import { AppRoutesEnum, AuthorizationStatusesEnum } from '../../consts';

type PrivateRouteProps = {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatusesEnum;
};

export function PrivateCheck(props: PrivateRouteProps): JSX.Element {
  const { children, authorizationStatus } = props;

  return authorizationStatus === AuthorizationStatusesEnum.AUTH ? (
    children
  ) : (
    <Navigate to={AppRoutesEnum.LOGIN} />
  );
}
