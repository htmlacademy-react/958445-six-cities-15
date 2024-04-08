import cn from 'classnames';
import { ElementType } from 'react';
import { useNavigate } from 'react-router-dom';

import type { City } from '../../types';
import { useAppDispatch } from '../../hooks';
import { AppRoutesEnum } from '../../consts';
import { setCity } from '../../store/city/city';

type Props = Readonly<{
  city: City;
  href?: string;
  Tag?: ElementType;
  isActive?: boolean;
  className?: string;
}>;

export function Location(props: Props): JSX.Element {
  const { city, isActive, Tag = 'li', className } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleCityClick = () => {
    dispatch(setCity(city));
    navigate(AppRoutesEnum.HOME);
  };

  return (
    <Tag className="locations__item">
      <a
        onClick={handleCityClick}
        className={cn('locations__item-link', className, {
          ['tabs__item--active']: isActive,
        })}
      >
        <span>{city.name}</span>
      </a>
    </Tag>
  );
}
