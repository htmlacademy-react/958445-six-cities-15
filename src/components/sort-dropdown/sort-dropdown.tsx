import cn from 'classnames';
import { useState } from 'react';

import { SortTypesEnum } from '../../consts';
import { SortType } from './sort-type/sort-type';

type Props = {
  sortType: SortTypesEnum;
  setSortType: (sortType: SortTypesEnum) => void;
};

const sortTypes = Object.values(SortTypesEnum) as Array<SortTypesEnum>;

export function SortDropdown({ sortType, setSortType }: Props): JSX.Element {
  const [showDropdown, setShowDropdown] = useState(false);
  const setShow = () => setShowDropdown(!showDropdown);

  return (
    <form action="#" method="get" onClick={setShow} className="places__sorting">
      <span className="places__sorting-caption">Sort by</span>
      <span tabIndex={0} className="places__sorting-type">
        {sortTypes.find((item) => item === sortType)}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={cn('places__options places__options--custom', {
          ['places__options--opened']: showDropdown,
        })}
      >
        {sortTypes.map((type) => (
          <SortType
            key={type}
            type={type}
            setSortType={setSortType}
            isActive={type === sortType}
          />
        ))}
      </ul>
    </form>
  );
}
