import { Helmet } from 'react-helmet-async';

import { CITIES } from '../../consts';
import { Favorites } from '../../components';
import { useAppSelector } from '../../hooks';
import { getFavorites } from '../../store/offers/selectors';

export function FavoritesPage(): JSX.Element {
  const offers = useAppSelector(getFavorites);
  const groupedOffers = CITIES.map((city) =>
    offers.filter((item) => item.city.name === city.name)
  ).filter((item) => item.length > 0);

  return (
    <div className="page__favorites-container container">
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {groupedOffers.map((item) => (
            <li key={item[0].city.name} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{item[0].city.name}</span>
                  </a>
                </div>
              </div>
              <Favorites offers={item} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
