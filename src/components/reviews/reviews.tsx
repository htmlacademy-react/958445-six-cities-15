import { Form } from '..';
import type { Review } from '../../types';
import { useIsAuthorized } from '../../hooks';
import { ReviewItem } from './review-item/review-item';

type Props = {
  reviews: Review[];
  handleSubmit: (value: Pick<Review, 'comment' | 'rating'>) => void;
};

export function Reviews({ reviews, handleSubmit }: Props): null | JSX.Element {
  const isAuthorized = useIsAuthorized();

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      {reviews.length && (
        <ul className="reviews__list">
          {reviews.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </ul>
      )}
      {isAuthorized && <Form handleSubmit={handleSubmit} />}
    </section>
  );
}
