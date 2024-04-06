import cn from 'classnames';

const SIZES = {
  BIG: { width: '31', height: '33' },
  SMALL: { width: '18', height: '19' },
};

type Props = {
  className: string;
  isFavorite: boolean;
  setIsFavorite: () => void;
  size?: keyof typeof SIZES;
};

export function Bookmark({
  className,
  isFavorite,
  setIsFavorite,
  size = 'SMALL',
}: Props) {
  return (
    <button
      type="button"
      onClick={setIsFavorite}
      className={cn(`${className}__bookmark-button button`, {
        [`${className}__bookmark-button--active`]: isFavorite,
      })}
    >
      <svg
        width={SIZES[size].width}
        height={SIZES[size].height}
        className={`${className}__bookmark-icon`}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
