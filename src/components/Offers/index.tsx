import { useCallback, useState } from 'react';

import { Card } from './Card';
import type { Offer } from '../../types';

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
        <Card
          offer={offer}
          key={offer.id}
          onMouseIn={onMouseIn}
          onMouseOut={onMouseOut}
        />
      ))}
    </div>
  );
}
