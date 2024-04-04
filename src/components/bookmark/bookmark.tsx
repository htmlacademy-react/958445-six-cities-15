import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ShortOfferType } from '../../types';
import { AppRoutesEnum } from '../../consts';
import { getFavorites } from '../../store/offers/selectors';
import { setIsFavoriteAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector, useIsAuthorized } from '../../hooks';

const SIZES = {
  BIG: { width: '31', height: '33' },
  SMALL: { width: '18', height: '19' },
};

type Props = {
  className: string;
  size?: keyof typeof SIZES;
  offer: Pick<ShortOfferType, 'id' | 'isFavorite'>;
};

export function Bookmark({ offer, className, size = 'SMALL' }: Props) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuthorized = useIsAuthorized();
  const favorites = useAppSelector(getFavorites);
  const [isFavorite, setIsFavorite] = useState(offer.isFavorite);
  const onClick = () => {
    if (isAuthorized) {
      dispatch(setIsFavoriteAction({ offerId: offer.id, status: !isFavorite }));
    } else {
      navigate(AppRoutesEnum.LOGIN);
    }
  };

  useEffect(() => {
    setIsFavorite(favorites.some((item) => item.id === offer.id));
  }, [favorites, offer.id]);

  return (
    <button
      type="button"
      onClick={onClick}
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
