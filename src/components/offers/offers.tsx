import cn from 'classnames';

import type { Offer } from '../../types';
import type { SortTypesEnum } from '../../consts';
import { PlaceCard } from '../place-card/place-card';

type Props = Readonly<{
  offers: Offer[];
  isTabs?: boolean;
  className: string;
  sortType?: SortTypesEnum;
  setActiveCard?: (id: string) => void;
}>;

export function Offers({ offers, isTabs, className, setActiveCard }: Props) {
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
