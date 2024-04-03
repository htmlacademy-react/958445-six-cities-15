import { memo } from 'react';

import { Form } from '..';
import { Review } from '../review/review';
import { useIsAuthorized } from '../../hooks';
import type { Review as ReviewType } from '../../types';

type Props = {
  reviews: ReviewType[];
  handleSubmit: (value: Pick<ReviewType, 'comment' | 'rating'>) => void;
};

export const Reviews = memo(
  ({ reviews, handleSubmit }: Props): null | JSX.Element => {
    const isAuthorized = useIsAuthorized();

    return (
      <section className="offer__reviews reviews">
        <h2 className="reviews__title">
          Reviews &middot;{' '}
          <span className="reviews__amount">{reviews.length}</span>
        </h2>
        {reviews.length > 0 && (
          <ul className="reviews__list">
            {reviews.map((review) => (
              <Review key={review.id} review={review} />
            ))}
          </ul>
        )}
        {isAuthorized && <Form handleSubmit={handleSubmit} />}
      </section>
    );
  }
);

Reviews.displayName = 'Reviews';
