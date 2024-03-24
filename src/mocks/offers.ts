import faker from 'faker';

import type { Offer } from '../types';

export const OFFERS: Offer[] = [
  {
    rating: 4.2,
    price: 120,
    type: 'apartment',
    id: faker.datatype.uuid(),
    title: 'Nice, cozy, warm big bed apartment',
    isPremium: false,
    isFavorite: false,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    previewImage: 'https://url-to-image/image.png',
  },
  {
    rating: 1.7,
    price: 120,
    type: 'apartment',
    id: faker.datatype.uuid(),
    title: 'Canal View Prinsengracht',
    isPremium: false,
    isFavorite: false,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    previewImage: 'https://url-to-image/image.png',
  },
  {
    rating: 5,
    price: 120,
    type: 'apartment',
    id: faker.datatype.uuid(),
    title: 'White castle',
    isPremium: false,
    isFavorite: false,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    previewImage: 'https://url-to-image/image.png',
  },
  {
    rating: 3,
    price: 120,
    type: 'apartment',
    id: faker.datatype.uuid(),
    title: 'Wood and stone place',
    isPremium: false,
    isFavorite: false,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    previewImage: 'https://url-to-image/image.png',
  },
];
