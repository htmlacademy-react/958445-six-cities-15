import cn from 'classnames';
import { useState } from 'react';

import { SortTypesEnum } from '../../consts';

type Props = Readonly<{
  sortType: SortTypesEnum;
  setSortType: (sortType: SortTypesEnum) => void;
}>;

const sortTypes = Object.values(SortTypesEnum) as Array<SortTypesEnum>;

export function SortDropdown({ sortType, setSortType }: Props): JSX.Element {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <form
      action="#"
      method="get"
      className="places__sorting"
      onClick={() => setShowDropdown(!showDropdown)}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span tabIndex={0} className="places__sorting-type">
        {sortTypes.find((item) => item === sortType)}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {showDropdown && (
        <ul className="places__options places__options--custom places__options--opened">
          {sortTypes.map((type) => (
            <li
              key={type}
              tabIndex={0}
              onClick={() => setSortType(type)}
              className={cn('places__option', {
                ['places__option--active']: type === sortType,
              })}
            >
              {type}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
