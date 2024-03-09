import { useCallback, useState } from 'react';

import type { Offer } from '../../types';
import { PlaceCard } from '../PlaceCard';

type Props = {
  offers: ReadonlyArray<Offer>;
};

export function Offers({ offers }: Props) {
  const [activeCard, setActiveCard] = useState<null | Offer>(null);

  const onMouseIn = useCallback((card: Offer) => {
    setActiveCard(card);
  }, []);

  const onMouseOut = useCallback(() => {
    setActiveCard(null);
  }, []);

  // eslint-disable-next-line no-console
  console.log({ activeCard });

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          className="cities"
          onMouseIn={onMouseIn}
          onMouseOut={onMouseOut}
        />
      ))}
    </div>
  );
}
