import { NameSpace } from '../../consts';
import { State } from '../../types';

export const getCurentUser = (state: State) => state[NameSpace.User].curentUser;
export const getAuthorizationStatus = (state: State) =>
  state[NameSpace.User].authorizationStatus;
