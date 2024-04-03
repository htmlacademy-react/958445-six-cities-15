import { Link } from 'react-router-dom';
import { MouseEventHandler } from 'react';

import { Rating } from '..';
import { AppRoutesEnum } from '../../consts';
import type { ShortOfferType } from '../../types';
import { Bookmark } from '../bookmark/bookmark';

type Props = Readonly<{
  className?: string;
  offer: ShortOfferType;
  onMouseEnter?: (id: string) => void;
}>;

export function PlaceCard(props: Props) {
  const { offer, onMouseEnter } = props;
  const link = `${AppRoutesEnum.OFFER}/${offer.id}`;
  const handleMouseEvent: MouseEventHandler<HTMLElement> = () =>
    onMouseEnter?.(offer.id);

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
          <Bookmark className="place-card" isActive={offer.isFavorite} />
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
