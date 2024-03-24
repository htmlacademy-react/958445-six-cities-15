import { Item } from './item/item';
import { City } from '../../types';
import { useAppSelector } from '../../hooks';

type Props = Readonly<{
  activeCity: City;
}>;

export function Locations(props: Props): JSX.Element {
  const cities = useAppSelector((state) => state.cities);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((item) => (
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
