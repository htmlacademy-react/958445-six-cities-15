import { createSlice } from '@reduxjs/toolkit';

import { FullUserType } from '../../types';
import { AuthorizationStatusesEnum, NameSpace } from '../../consts';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

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
        state.curentUser = action.payload;
        state.authorizationStatus = AuthorizationStatusesEnum.AUTH;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatusesEnum.NO_AUTH;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatusesEnum.NO_AUTH;
      });
  },
});
