import type { Offer } from '../../types';
import { PlaceCard } from '../place-card/place-card';

type Props = {
  offers: Offer[];
};

export function Favorites({ offers }: Props) {
  return (
    <div className="favorites__places">
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} className="favorites" />
      ))}
    </div>
  );
}
