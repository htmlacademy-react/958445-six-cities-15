import faker from 'faker';

export const REVIEWS = [
  {
    rate: 4.2,
    username: 'Max',
    date: '2019-04-24',
    id: faker.datatype.uuid(),
    avatar: 'img/avatar-max.jpg',
    text: `A quiet cozy and picturesque that hides behind a a river by the 
    unique lightness of Amsterdam. The building is green and from 18th century.`,
  },
];
