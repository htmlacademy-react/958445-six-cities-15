import { City } from '../../types';
import { CITIES } from '../../consts';
import { Location } from '../location/location';

type Props = Readonly<{
  activeCity: City;
}>;

export function Locations(props: Props): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((item) => (
          <Location
            city={item}
            key={item.name}
            className="tabs__item"
            isActive={props.activeCity.name === item.name}
          />
        ))}
      </ul>
    </section>
  );
}
