type Props = Readonly<{
  rating: number;
  classname: string;
  withValue?: boolean;
}>;

export function Rating({ rating, withValue = false, classname }: Props) {
  return (
    <div className={`${classname}__rating rating`}>
      <div className={`${classname}__stars rating__stars`}>
        <span style={{ width: `${rating * 20}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {withValue && (
        <span className="offer__rating-value rating__value">{rating}</span>
      )}
    </div>
  );
}
