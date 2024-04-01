import cn from 'classnames';

import { useSortOffers } from './hooks';
import type { Offer } from '../../types';
import { SortTypesEnum } from '../../consts';
import { PlaceCard } from '../place-card/place-card';
import { useSortOffers } from './hooks';

type Props = {
  offers: Offer[];
  isTabs?: boolean;
  className: string;
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
