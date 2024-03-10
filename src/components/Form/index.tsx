import { useCallback, useMemo, useState } from 'react';

import { Star } from './Star';

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
  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = 'checked' in target ? Number(target.value) : target.value;

      setForm((prev) => ({ ...prev, [target.name]: value }));
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
          handleChange={handleChange}
        />
      )).reverse(),
    [form.rating, handleChange]
  );

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
        onChange={handleChange}
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
          className="reviews__submit form__submit button"
          disabled={form.rating < 1 || form.review.trim().length < 50}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
