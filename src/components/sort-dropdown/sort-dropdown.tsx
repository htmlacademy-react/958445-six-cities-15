import { useCallback, useState } from 'react';

import { SortType } from './sort-type';
import { SortTypesEnum } from '../../consts';

type Props = {
  sortType: SortTypesEnum;
  setSortType: (sortType: SortTypesEnum) => void;
};

const sortTypes = Object.values(SortTypesEnum) as Array<SortTypesEnum>;

export function SortDropdown({ sortType, setSortType }: Props): JSX.Element {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = useCallback(
    () => setShowDropdown(!showDropdown),
    [showDropdown]
  );

  return (
    <form
      action="#"
      method="get"
      onClick={toggleDropdown}
      className="places__sorting"
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
            <SortType
              key={type}
              type={type}
              setSortType={setSortType}
              isActive={type === sortType}
            />
          ))}
        </ul>
      )}
    </form>
  );
}
