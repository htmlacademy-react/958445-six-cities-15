import { memo } from 'react';

import { Form } from '..';
import { Review } from '../review/review';
import { sendReviewHandler } from './utils';
import { useIsAuthorized } from '../../hooks';
import { useReviews } from '../../pages/offer/hooks';

type Props = {
  id: string;
};

export const Reviews = memo(({ id }: Props): null | JSX.Element => {
  const isAuthorized = useIsAuthorized();
  const [reviews, setReviews] = useReviews(id);
  const sendReview = sendReviewHandler(setReviews, id);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      {reviews.length > 0 && (
        <ul className="reviews__list">
          {reviews.slice(0, 10).map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </ul>
      )}
      {isAuthorized && <Form handleSubmit={sendReview} />}
    </section>
  );
});

Reviews.displayName = 'Reviews';
