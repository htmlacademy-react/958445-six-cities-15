import { useMemo } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, Offer, State } from '../types';
import { AuthorizationStatusesEnum } from '../consts';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useOffersByCity = () => {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  return useMemo(
    (): Offer[] => offers.filter((item) => item.city.name === city.name),
    [city.name, offers]
  );
};

export const useIsAuthorized = () => {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  return authorizationStatus === AuthorizationStatusesEnum.AUTH;
};
