import type { State } from '../../types';
import { NameSpace } from '../../consts';

export const getCity = (state: State) => state[NameSpace.City].city;
