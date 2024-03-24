import cn from 'classnames';
import { useCallback } from 'react';

import type { City } from '../../../types';
import { useAppDispatch } from '../../../hooks';
import { setCity } from '../../../store/action';

type Props = Readonly<{
  city: City;
  isActive?: boolean;
  className?: string;
}>;

export function Item(props: Props): JSX.Element {
  const { city, isActive, className } = props;
  const dispatch = useAppDispatch();
  const handleCityClick = useCallback(() => {
    dispatch(setCity(city));
  }, [dispatch, city]);

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
