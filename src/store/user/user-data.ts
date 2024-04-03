import { createSlice } from '@reduxjs/toolkit';

import { FullUserType } from '../../types';
import { AuthorizationStatusesEnum, NameSpace } from '../../consts';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { clearToken, setToken } from '../../services/token';

const initialState: {
  curentUser: null | FullUserType;
  authorizationStatus: AuthorizationStatusesEnum;
} = {
  curentUser: null,
  authorizationStatus: AuthorizationStatusesEnum.UNKNOWN,
};

export const user = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.curentUser = action.payload;
        state.authorizationStatus = AuthorizationStatusesEnum.AUTH;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatusesEnum.NO_AUTH;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        setToken(action.payload.token);
        state.curentUser = action.payload;
        state.authorizationStatus = AuthorizationStatusesEnum.AUTH;
      })
      .addCase(loginAction.rejected, (state, action) => {
        // eslint-disable-next-line no-console
        console.log({ action });

        state.authorizationStatus = AuthorizationStatusesEnum.NO_AUTH;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        clearToken();
        state.authorizationStatus = AuthorizationStatusesEnum.NO_AUTH;
      });
  },
});
