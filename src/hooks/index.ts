import { useMemo } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, State } from '../types';
import { ShortOfferType } from '../types/offer';
import { AuthorizationStatusesEnum } from '../consts';
import { getAuthorizationStatus, getCity, getOffers } from '../store/selectors';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useOffersByCity = () => {
  const city = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);

  return useMemo(
    (): ShortOfferType[] =>
      offers.filter((item) => item.city.name === city.name),
    [city.name, offers]
  );
};

export const useIsAuthorized = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return authorizationStatus === AuthorizationStatusesEnum.AUTH;
};
