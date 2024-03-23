import cn from 'classnames';

import type { Offer } from '../../types';
import { PlaceCard } from '../place-card/place-card';

type Props = {
  isTabs?: boolean;
  className: string;
  offers: ReadonlyArray<Offer>;
  setActiveCard?: (id: string) => void;
};

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
