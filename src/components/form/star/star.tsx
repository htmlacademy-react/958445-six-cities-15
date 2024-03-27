import { Fragment } from 'react';

type Props = Readonly<{
  value: number;
  title: string;
  formValue: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>;

export function Star(props: Props) {
  const { value, title, formValue, handleChange } = props;
  const id = `${value}-stars`;

  return (
    <Fragment>
      <input
        id={id}
        type="radio"
        name="rating"
        value={value}
        onChange={handleChange}
        checked={value === formValue}
        className="form__rating-input visually-hidden"
      />
      <label
        htmlFor={id}
        title={title}
        className="reviews__rating-label form__rating-label"
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}
