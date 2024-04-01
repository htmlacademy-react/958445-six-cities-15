import { City } from '../../types';
import { CITIES } from '../../consts';
import { LocationsItem } from './item/item';

type Props = Readonly<{
  activeCity: City;
}>;

export function Locations(props: Props): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((item) => (
          <LocationsItem
            city={item}
            key={item.name}
            isActive={props.activeCity.name === item.name}
          />
        ))}
      </ul>
    </section>
  );
}

Locations.Item = LocationsItem;
