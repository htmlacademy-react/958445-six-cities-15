import { Rating } from '../..';
import type { Review } from '../../../types';

type Props = Readonly<{
  review: Review;
}>;

export function Review({ review }: Props) {
  const date = new Date(review.date).toLocaleString('en', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            width="54"
            height="54"
            src={review.avatar}
            alt="Reviews avatar"
            className="reviews__avatar user__avatar"
          />
        </div>
        <span className="reviews__user-name">{review.username}</span>
      </div>
      <div className="reviews__info">
        <Rating rating={review.rating} classname="reviews" />
        <p className="reviews__text">{review.text}</p>
        <time className="reviews__time" dateTime={review.date}>
          {date}
        </time>
      </div>
    </li>
  );
}
