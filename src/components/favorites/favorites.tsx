import type { ShortOfferType } from '../../types';
import { PlaceCard } from '../place-card/place-card';

type Props = Readonly<{
  offers: ShortOfferType[];
}>;

export function Favorites({ offers }: Props) {
  return (
    <div className="favorites__places">
      {offers.map((offer) => (
        <PlaceCard
          isFavorites
          size="SMALL"
          offer={offer}
          key={offer.id}
          className="favorites"
        />
      ))}
    </div>
  );
}
