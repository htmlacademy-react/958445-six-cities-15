import cn from 'classnames';
import { useState } from 'react';

import { SortTypesEnum } from '../../consts';

type Props = Readonly<{
  sortType: SortTypesEnum;
  setSortType: (sortType: number) => void;
}>;

const labels = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

const sortTypes = (
  Object.keys(SortTypesEnum) as Array<keyof typeof SortTypesEnum>
).map((key, index) => ({
  label: labels[index],
  value: SortTypesEnum[key],
}));

export function SortDropdown({ sortType, setSortType }: Props): JSX.Element {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        tabIndex={0}
        className="places__sorting-type"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {sortTypes.find((item) => item.value === sortType)?.label}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {showDropdown && (
        <ul className="places__options places__options--custom places__options--opened">
          {sortTypes.map((type) => (
            <li
              key={type.value}
              onClick={() => setSortType(type.value)}
              className={cn('places__option', {
                ['places__option--active']: type.value === sortType,
              })}
              tabIndex={0}
            >
              {type.label}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
