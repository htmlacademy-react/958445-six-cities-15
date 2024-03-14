import { useCallback, useMemo, useState } from 'react';

import { Star } from './star/star';

const STARS_VALUES = [
  { value: 1, title: 'terribly' },
  { value: 2, title: 'badly' },
  { value: 3, title: 'not bad' },
  { value: 4, title: 'good' },
  { value: 5, title: 'perfect' },
];

export function Form() {
  const [form, setForm] = useState({
    rating: 0,
    review: '',
  });
  const onChangeRating = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, rating: Number(target.value) }));
    },
    []
  );
  const onChangeReview = useCallback(
    ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, review: target.value }));
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
  const isValidReview = form.rating > 0 && form.review.trim().length >= 50;

  return (
    <form className="reviews__form form" action="#" method="post">
      <label htmlFor="review" className="reviews__label form__label">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">{stars}</div>
      <textarea
        id="review"
        name="review"
        value={form.review}
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
