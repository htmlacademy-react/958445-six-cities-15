import cn from 'classnames';

import type { SortTypesEnum } from '../../../consts';

type Props = {
  isActive: boolean;
  type: SortTypesEnum;
  setSortType: (type: SortTypesEnum) => void;
};

export function SortType({ isActive, type, setSortType }: Props) {
  const setSorting = () => setSortType(type);

  return (
    <li
      key={type}
      tabIndex={0}
      onClick={setSorting}
      className={cn('places__option', {
        ['places__option--active']: isActive,
      })}
    >
      {type}
    </li>
  );
}
