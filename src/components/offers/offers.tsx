import cn from 'classnames';

import type { Offer } from '../../types';
import { SortTypesEnum } from '../../consts';
import { PlaceCard } from '../place-card/place-card';

type Props = {
  offers: Offer[];
  isTabs?: boolean;
  className: string;
  sortType?: SortTypesEnum;
  setActiveCard?: (id: string) => void;
};

function sortOffers(sortType: SortTypesEnum, offers: Offer[]): Offer[] {
  switch (sortType) {
    case SortTypesEnum.POPULAR:
      return offers;

    case SortTypesEnum.PRICE_TO_HIGH:
      return offers.sort((a, b) => a.price - b.price);

    case SortTypesEnum.PRICE_TO_LOW:
      return offers.sort((a, b) => b.price - a.price);

    case SortTypesEnum.RATED_FIRST:
      return offers.sort((a, b) => b.price - a.price);

    default:
      return offers;
  }
}

export function Offers(props: Props) {
  const { isTabs, sortType, className, setActiveCard } = props;
  const offers = sortType ? sortOffers(sortType, props.offers) : props.offers;

  return (
    <div
      className={cn(`${className}__places-list places__list`, {
        ['tabs__content']: isTabs,
      })}
    >
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          className={className}
          onMouseEnter={setActiveCard}
        />
      ))}
    </div>
  );
}
