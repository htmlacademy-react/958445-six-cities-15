import { useAppSelector } from './useAppSelector';
import { AuthorizationStatusesEnum } from '../consts';
import { getAuthorizationStatus } from '../store/user/selectors';

export const useIsAuthorized = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return authorizationStatus === AuthorizationStatusesEnum.AUTH;
};
