import { Link, useNavigate } from 'react-router-dom';
import { MouseEventHandler, useEffect, useState } from 'react';

import { Rating } from '..';
import { AppRoutesEnum } from '../../consts';
import { Bookmark } from '../bookmark/bookmark';
import type { ShortOfferType } from '../../types';
import { useAppDispatch, useAppSelector, useIsAuthorized } from '../../hooks';
import { setIsFavoriteAction } from '../../store/api-actions';
import { getFavorites } from '../../store/offers/selectors';

type Props = Readonly<{
  className?: string;
  offer: ShortOfferType;
  onMouseEnter?: (id: string) => void;
}>;

export function PlaceCard(props: Props) {
  const { offer, onMouseEnter } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuthorized = useIsAuthorized();
  const favorites = useAppSelector(getFavorites);
  const link = `${AppRoutesEnum.OFFER}/${offer.id}`;
  const [isFavorite, setIsFavorite] = useState(offer.isFavorite);
  const handleMouseEvent: MouseEventHandler<HTMLElement> = () =>
    onMouseEnter?.(offer.id);

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
    <article
      onMouseEnter={handleMouseEvent}
      className={`${props.className}__card place-card`}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`${props.className}__image-wrapper place-card__image-wrapper`}
      >
        <Link to={link}>
          <img
            width="260"
            height="200"
            alt="Place image"
            src="img/apartment-01.jpg"
            className="place-card__image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark
            onClick={onClick}
            isActive={isFavorite}
            className="place-card"
          />
        </div>
        <Rating rating={offer.rating} className="place-card" />
        <h2 className="place-card__name">
          <Link to={link}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">
          {offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}
        </p>
      </div>
    </article>
  );
}
