import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

import { AppRoutesEnum } from '../consts';
import { getFavorites } from '../store/offers/selectors';
import { setIsFavoriteAction } from '../store/api-actions';
import type { FullOfferType, ShortOfferType } from '../types';
import { useAppDispatch, useAppSelector, useIsAuthorized } from '.';

export function useIsFavorite(
  offer: null | ShortOfferType | FullOfferType
): [boolean, () => void] {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuthorized = useIsAuthorized();
  const favorites = useAppSelector(getFavorites);
  const [isFavorite, setIsFavorite] = useState(offer?.isFavorite ?? false);
  const onClick = () => {
    if (offer && isAuthorized) {
      dispatch(setIsFavoriteAction({ offerId: offer.id, status: !isFavorite }));
    } else {
      navigate(AppRoutesEnum.LOGIN);
    }
  };

  useEffect(() => {
    if (offer) {
      setIsFavorite(favorites.some((item) => item.id === offer.id));
    }
  }, [favorites, offer, offer?.id]);

  return [isFavorite, onClick];
}
