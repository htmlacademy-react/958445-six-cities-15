import { Item } from './item/item';
import { City } from '../../types';

type Props = Readonly<{
  cities: City[];
  activeCity: City;
}>;

export function Locations(props: Props): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {props.cities.map((item) => (
          <Item
            city={item}
            key={item.name}
            isActive={props.activeCity.name === item.name}
          />
        ))}
      </ul>
    </section>
  );
}

Locations.Item = Item;
