import { FormEvent, useCallback, useState } from 'react';

import { Star } from './star/star';
import { Review } from '../../types';

const INITIAL_RATING = 0;
const MAX_COMMENT_LENGTH = 50;
const STARS_VALUES = [
  { value: 1, title: 'terribly' },
  { value: 2, title: 'badly' },
  { value: 3, title: 'not bad' },
  { value: 4, title: 'good' },
  { value: 5, title: 'perfect' },
];
const INITIAL_REVIEW = {
  comment: '',
  rating: INITIAL_RATING,
};

type Props = {
  handleSubmit: (value: Pick<Review, 'comment' | 'rating'>) => Promise<void>;
};

export function Form(props: Props) {
  const [form, setForm] = useState(INITIAL_REVIEW);
  const isValidReview =
    form.rating > INITIAL_RATING &&
    form.comment.trim().length >= MAX_COMMENT_LENGTH;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChangeRating = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, rating: Number(target.value) }));
    },
    []
  );
  const onChangeComment = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, comment: target.value }));
  };
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsSubmitting(true);
    props.handleSubmit(form).then(() => {
      setIsSubmitting(false);
      setForm(INITIAL_REVIEW);
    });
  };

  return (
    <form
      action="#"
      method="post"
      onSubmit={handleSubmit}
      className="reviews__form form"
    >
      <label htmlFor="review" className="reviews__label form__label">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {STARS_VALUES.map((item) => (
          <Star
            key={item.value}
            title={item.title}
            value={item.value}
            formValue={form.rating}
            disabled={isSubmitting}
            handleChange={onChangeRating}
          />
        )).reverse()}
      </div>
      <textarea
        id="review"
        name="review"
        minLength={50}
        maxLength={300}
        value={form.comment}
        disabled={isSubmitting}
        onChange={onChangeComment}
        className="reviews__textarea form__textarea"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          type="submit"
          disabled={!isValidReview || isSubmitting}
          className="reviews__submit form__submit button"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
