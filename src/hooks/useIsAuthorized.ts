import { useAppSelector } from './useAppSelector';
import { AuthorizationStatusesEnum } from '../consts';
import { getAuthorizationStatus } from '../store/selectors';

export const useIsAuthorized = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return authorizationStatus === AuthorizationStatusesEnum.AUTH;
};
