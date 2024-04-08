type Props = Readonly<{
  rating: number;
  className: string;
  withValue?: boolean;
}>;

export function Rating({ rating, withValue = false, className }: Props) {
  return (
    <div className={`${className}__rating rating`}>
      <div className={`${className}__stars rating__stars`}>
        <span style={{ width: `${rating * 19}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {withValue && (
        <span className={`${className}__rating-value rating__value`}>
          {rating}
        </span>
      )}
    </div>
  );
}
