import { Helmet } from 'react-helmet-async';

import { CITIES } from '../../consts';
import { Favorites } from '../../components';
import { useAppSelector } from '../../hooks';
import { getFavorites } from '../../store/offers/selectors';
import { FavoritesEmpty } from './empty/empty';

export function FavoritesPage(): JSX.Element {
  const favorites = useAppSelector(getFavorites);
  const groupedFavorites = CITIES.map((city) =>
    favorites.filter((item) => item.city.name === city.name)
  ).filter((item) => item.length > 0);

  return (
    <div className="page__favorites-container container">
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      {groupedFavorites.length > 0 ? (
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {groupedFavorites.map((item) => (
              <li
                key={item[0].city.name}
                className="favorites__locations-items"
              >
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
      ) : (
        <FavoritesEmpty />
      )}
    </div>
  );
}
