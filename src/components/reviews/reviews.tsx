import { Form } from '..';
import { REVIEWS } from '../../mocks';
import { Review } from './review/review';

export function Reviews() {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{REVIEWS.length}</span>
      </h2>
      <ul className="reviews__list">
        {REVIEWS.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
      <Form />
    </section>
  );
}
