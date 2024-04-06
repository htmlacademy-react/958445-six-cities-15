import { State } from '../../types';
import { NameSpace } from '../../consts';

export const getCurentUser = (state: State) => state[NameSpace.User].curentUser;
export const getAuthorizationStatus = (state: State) =>
  state[NameSpace.User].authorizationStatus;
