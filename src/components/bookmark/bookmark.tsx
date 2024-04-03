import cn from 'classnames';

const SIZES = {
  BIG: { width: '31', height: '33' },
  SMALL: { width: '18', height: '19' },
};

type Props = {
  isActive: boolean;
  className: string;
  size?: keyof typeof SIZES;
};

export function Bookmark({ size = 'SMALL', className, isActive }: Props) {
  return (
    <button
      type="button"
      className={cn(`${className}__bookmark-button button`, {
        [`${className}__bookmark-button--active`]: isActive,
      })}
    >
      <svg
        className={`${className}__bookmark-icon`}
        width={SIZES[size].width}
        height={SIZES[size].height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
