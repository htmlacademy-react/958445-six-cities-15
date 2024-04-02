import { Rating } from '../..';
import type { Review } from '../../../types';

type Props = Readonly<{
  review: Review;
}>;

export function ReviewItem({ review }: Props) {
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
            alt="Reviews avatar"
            src={review.user.avatarUrl}
            className="reviews__avatar user__avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <Rating rating={review.rating} className="reviews" />
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={review.date}>
          {date}
        </time>
      </div>
    </li>
  );
}
