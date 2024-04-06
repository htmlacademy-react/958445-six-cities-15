import { Dispatch, SetStateAction } from 'react';

import { api } from '../../store';
import type { Review } from '../../types';
import { ApiRoutesEnum } from '../../consts';

export function sendReviewHandler(
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
