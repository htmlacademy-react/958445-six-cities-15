import faker from 'faker';

export const offers = Array.from({ length: 4 }, () => ({
  rate: 4,
  price: 120,
  premium: true,
  id: faker.datatype.uuid(),
  name: 'Beautiful & luxurious apartment at great location',
}));
