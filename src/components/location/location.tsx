import cn from 'classnames';

import type { City } from '../../types';
import { useAppDispatch } from '../../hooks';
import { setCity } from '../../store/action';

type Props = Readonly<{
  city: City;
  isActive?: boolean;
  className?: string;
}>;

export function Location(props: Props): JSX.Element {
  const { city, isActive, className } = props;
  const dispatch = useAppDispatch();
  const handleCityClick = () => {
    dispatch(setCity(city));
  };

  return (
    <li className="locations__item">
      <a
        onClick={handleCityClick}
        className={cn('locations__item-link', className, {
          ['tabs__item--active']: isActive,
        })}
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}
