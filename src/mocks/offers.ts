import faker from 'faker';

import type { Offer } from '../types';

export const OFFERS: ReadonlyArray<Offer> = [
  {
    rate: 4.2,
    price: 120,
    premium: true,
    lat: 52.3909553943508,
    lng: 4.85309666406198,
    id: faker.datatype.uuid(),
    title: 'Nice, cozy, warm big bed apartment',
  },
  {
    rate: 1.7,
    price: 120,
    premium: true,
    lat: 52.3609553943508,
    lng: 4.85309666406198,
    id: faker.datatype.uuid(),
    title: 'Canal View Prinsengracht',
  },
  {
    rate: 5,
    price: 120,
    premium: true,
    lat: 52.3909553943508,
    lng: 4.929309666406198,
    id: faker.datatype.uuid(),
    title: 'White castle',
  },
  {
    rate: 3,
    price: 120,
    premium: true,
    lat: 52.3809553943508,
    lng: 4.939309666406198,
    id: faker.datatype.uuid(),
    title: 'Wood and stone place',
  },
];
