import cn from 'classnames';

import { useSortOffers } from './hooks';
import { SortTypesEnum } from '../../consts';
import type { ShortOfferType } from '../../types';
import { PlaceCard } from '../place-card/place-card';

type Props = {
  isTabs?: boolean;
  className: string;
  offers: ShortOfferType[];
  sortType?: SortTypesEnum;
  setActiveCard?: (id: string) => void;
};

export function Offers(props: Props) {
  const { isTabs, sortType, className, setActiveCard } = props;
  const offers = useSortOffers(props.offers, sortType);

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
