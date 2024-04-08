import cn from 'classnames';
import { Link } from 'react-router-dom';
import { MouseEventHandler } from 'react';

import { Rating } from '..';
import { AppRoutesEnum } from '../../consts';
import { Bookmark } from '../bookmark/bookmark';
import type { ShortOfferType } from '../../types';
import { useHandleAddFavorite } from '../../hooks';

const SIZES = {
  BIG: {
    width: '260',
    height: '200',
  },
  SMALL: {
    width: '150',
    height: '110',
  },
};

type Props = Readonly<{
  className?: string;
  isFavorites?: boolean;
  offer: ShortOfferType;
  size?: keyof typeof SIZES;
  setActiveCard?: (id: string) => void;
}>;

export function PlaceCard(props: Props) {
  const { offer, size = 'BIG', isFavorites = false, setActiveCard } = props;
  const link = `${AppRoutesEnum.OFFER}/${offer.id}`;
  const [isFavorite, setIsFavorite] = useHandleAddFavorite(offer);
  const onMouseEnter: MouseEventHandler<HTMLElement> = () =>
    setActiveCard?.(offer.id);
  const onMouseLeave: MouseEventHandler<HTMLElement> = () =>
    setActiveCard?.('');

  return (
    <article
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
            alt="Place image"
            src={offer.previewImage}
            width={SIZES[size].width}
            height={SIZES[size].height}
            className="place-card__image"
          />
        </Link>
      </div>
      <div
        className={cn(
          {
            ['favorites__card-info']: isFavorites,
          },
          'place-card__info'
        )}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark
            className="place-card"
            isFavorite={isFavorite}
            setIsFavorite={setIsFavorite}
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
