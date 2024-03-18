type Props = Readonly<{
  rate: number;
  classname: string;
  withValue?: boolean;
}>;

export function Rating({ rate, withValue = false, classname }: Props) {
  return (
    <div className={`${classname}__rating rating`}>
      <div className={`${classname}__stars rating__stars`}>
        <span style={{ width: `${rate * 20}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {withValue && (
        <span className="offer__rating-value rating__value">{rate}</span>
      )}
    </div>
  );
}
