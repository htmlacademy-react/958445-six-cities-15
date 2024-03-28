import cn from 'classnames';
import { useCallback } from 'react';

import type { SortTypesEnum } from '../../../consts';

type Props = {
  isActive: boolean;
  type: SortTypesEnum;
  setSortType: (type: SortTypesEnum) => void;
};

export function SortType({ isActive, type, setSortType }: Props) {
  const onChangeSorting = useCallback(
    () => setSortType(type),
    [setSortType, type]
  );

  return (
    <li
      tabIndex={0}
      key={type}
      onClick={onChangeSorting}
      className={cn('places__option', {
        ['places__option--active']: isActive,
      })}
    >
      {type}
    </li>
  );
}
