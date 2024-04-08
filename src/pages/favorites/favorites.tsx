import cn from 'classnames';
import { Helmet } from 'react-helmet-async';

import { CITIES } from '../../consts';
import { useAppSelector } from '../../hooks';
import { FavoritesEmpty } from './empty/empty';
import { getFavorites } from '../../store/offers/selectors';
import { Favorites, Header, Footer, Location } from '../../components';

export function FavoritesPage(): JSX.Element {
  const favorites = useAppSelector(getFavorites);
  const isEmptyFavorites = favorites.length === 0;
  const groupedFavorites = isEmptyFavorites
    ? []
    : CITIES.map((city) =>
        favorites.filter((item) => item.city.name === city.name)
      ).filter((item) => item.length > 0);

  return (
    <div
      className={cn('page', {
        ['page--favorites-empty']: isEmptyFavorites,
      })}
    >
      <Header withNav />
      <main
        className={cn('page__main page__main--favorites', {
          ['page__main--favorites-empty']: isEmptyFavorites,
        })}
      >
        <div className="page__favorites-container container">
          <Helmet>
            <title>Favorites</title>
          </Helmet>
          {isEmptyFavorites ? (
            <FavoritesEmpty />
          ) : (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {groupedFavorites.map((item) => (
                  <li
                    key={item[0].city.name}
                    className="favorites__locations-items"
                  >
                    <div className="favorites__locations locations locations--current">
                      <Location Tag="div" city={item[0].city} />
                    </div>
                    <Favorites offers={item} />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
