import type { Offer } from '../../types';
import { Card } from './Card';

type Props = {
  offers: ReadonlyArray<Offer>;
};

export function Favorites({ offers }: Props) {
  return (
    <div className="favorites__places">
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} />
      ))}
    </div>
  );
}
