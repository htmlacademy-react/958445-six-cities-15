import { Dispatch, SetStateAction } from 'react';

import { api } from '../../store';
import type { Review } from '../../types';
import { ApiRoutesEnum } from '../../consts';

export function sendReviewHandler(
  id: string,
  setReviews: Dispatch<SetStateAction<Review[]>>
) {
  return (review: Pick<Review, 'comment' | 'rating'>) =>
    api
      .post<Review>(`${ApiRoutesEnum.COMMENTS}/${id}`, review)
      .then(({ data }) => setReviews((prev) => [data, ...prev]));
}
