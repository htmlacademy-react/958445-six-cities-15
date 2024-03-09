import { Link } from 'react-router-dom';
import { AppRoutesEnum } from '../../consts';
import type { Offer } from '../../types';
import cn from 'classnames';

type Props = Readonly<{
  offer: Offer;
  isActive?: boolean;
  className?: string;
  onMouseOut?: () => void;
  onMouseIn?: (offer: Offer) => void;
}>;

export function PlaceCard(props: Props) {
  const { offer, isActive, onMouseOut, onMouseIn } = props;
  const link = `${AppRoutesEnum.OFFER}/${offer.id}`;

  return (
    <article
      onMouseLeave={onMouseOut}
      onMouseEnter={() => onMouseIn?.(offer)}
      className={`${props.className}__card place-card`}
    >
      {offer.premium && (
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
          <button
            type="button"
            className={cn('place-card__bookmark-button button', {
              ['place-card__bookmark-button--active']: isActive,
            })}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            {/* compute percent */}
            <span style={{ width: '100%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={link}>{offer.name}</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}
