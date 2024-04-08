import { Fragment, memo } from 'react';

type Props = Readonly<{
  value: number;
  title: string;
  disabled: boolean;
  formValue: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>;

export const Star = memo((props: Props) => {
  const { value, title, disabled, formValue, handleChange } = props;
  const id = `${value}-stars`;

  return (
    <Fragment>
      <input
        id={id}
        type="radio"
        name="rating"
        value={value}
        disabled={disabled}
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
});

Star.displayName = 'Star';
