import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/selectors';
import { AppRoutesEnum, AuthorizationStatusesEnum } from '../../consts';

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateCheck(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return authorizationStatus === AuthorizationStatusesEnum.AUTH ? (
    children
  ) : (
    <Navigate to={AppRoutesEnum.LOGIN} />
  );
}
