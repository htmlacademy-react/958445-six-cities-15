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
        .then(({ data }) => setNearPlaces(data));
    }
  }, [id]);

  return nearPlaces;
}

export function useSendReview(
  setReviews: Dispatch<SetStateAction<Review[]>>,
  id?: string
) {
  return (review: Pick<Review, 'comment' | 'rating'>) => {
    if (id) {
      api
        .post<Review>(`${ApiRoutesEnum.COMMENTS}/${id}`, review)
        .then(({ data }) => setReviews((prev) => [...prev, data]));
    }
  };
}

export function useReviews(
  id?: string
): [Review[], Dispatch<SetStateAction<Review[]>>] {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    if (id) {
      api.get<Review[]>(`${ApiRoutesEnum.COMMENTS}/${id}`).then(({ data }) => {
        setReviews(data);
      });
    }
  }, [id]);

  return [reviews, setReviews];
}
