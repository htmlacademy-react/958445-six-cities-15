import { FormEvent, useCallback, useMemo, useState } from 'react';

import { Star } from './star/star';
import { Review } from '../../types';

const STARS_VALUES = [
  { value: 1, title: 'terribly' },
  { value: 2, title: 'badly' },
  { value: 3, title: 'not bad' },
  { value: 4, title: 'good' },
  { value: 5, title: 'perfect' },
];
const INITIAL_REVIEW = {
  rating: 0,
  comment: '',
};

type Props = {
  handleSubmit: (value: Pick<Review, 'comment' | 'rating'>) => void;
};

export function Form(props: Props) {
  const [form, setForm] = useState(INITIAL_REVIEW);
  const isValidReview = form.rating > 0 && form.comment.trim().length >= 50;

  const onChangeRating = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, rating: Number(target.value) }));
    },
    []
  );
  const onChangeReview = useCallback(
    ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, comment: target.value }));
    },
    []
  );
  const stars = useMemo(
    () =>
      STARS_VALUES.map((item) => (
        <Star
          key={item.value}
          title={item.title}
          value={item.value}
          formValue={form.rating}
          handleChange={onChangeRating}
        />
      )).reverse(),
    [form.rating, onChangeRating]
  );
  const handleSubmit = useCallback(
    (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      props.handleSubmit(form);
      setForm(INITIAL_REVIEW);
    },
    [form, props]
  );

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
      <div className="reviews__rating-form form__rating">{stars}</div>
      <textarea
        id="review"
        name="review"
        value={form.comment}
        onChange={onChangeReview}
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
          disabled={!isValidReview}
          className="reviews__submit form__submit button"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
