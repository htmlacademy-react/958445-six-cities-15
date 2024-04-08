import { Dispatch, useState, useEffect, SetStateAction } from 'react';

import { api } from '../../store';
import { ApiRoutesEnum } from '../../consts';
import type { FullOfferType, Review, ShortOfferType } from '../../types';

export function useOffers(id?: string) {
  const [offer, setOffer] = useState<null | FullOfferType>(null);

  useEffect(() => {
    if (id) {
      api
        .get<FullOfferType>(`${ApiRoutesEnum.OFFERS}/${id}`)
        .then(({ data }) => setOffer(data));
    }
  }, [id]);

  return offer;
}

export function useNearPlaces(id?: string) {
  const [nearPlaces, setNearPlaces] = useState<ShortOfferType[]>([]);

  useEffect(() => {
    if (id) {
      api
        .get<ShortOfferType[]>(`${ApiRoutesEnum.OFFERS}/${id}/nearby`)
        .then(({ data }) => data.slice(0, 3))
        .then(setNearPlaces);
    }
  }, [id]);

  return nearPlaces;
}

export function useReviews(
  id?: string
): [Review[], Dispatch<SetStateAction<Review[]>>] {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    if (id) {
      api
        .get<Review[]>(`${ApiRoutesEnum.COMMENTS}/${id}`)
        .then(({ data }) =>
          data.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
        )
        .then(setReviews);
    }
  }, [id]);

  return [reviews, setReviews];
}
