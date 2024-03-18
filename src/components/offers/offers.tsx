import type { Offer } from '../../types';
import { PlaceCard } from '../place-card/place-card';

type Props = {
  offers: ReadonlyArray<Offer>;
  setActiveCard?: (offer: Offer) => void;
};

export function Offers({ offers, setActiveCard }: Props) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          className="cities"
          setActiveCard={setActiveCard}
        />
      ))}
    </div>
  );
}
