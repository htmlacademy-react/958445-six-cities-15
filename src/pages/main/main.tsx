import cn from 'classnames';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { OffersEmpty } from './empty/empty';
import { SortTypesEnum } from '../../consts';
import { useAppSelector } from '../../hooks';
import { getCity } from '../../store/city/selectors';
import { getCountWithNoun, getSelectedOffers } from './utils';
import { Header, Locations, Map, Offers, SortDropdown } from '../../components';

export function MainPage(): JSX.Element {
  const city = useAppSelector(getCity);
  const offers = useAppSelector(getSelectedOffers);
  const [activeCardId, setActiveCardId] = useState<string>('');
  const [sortType, setSortType] = useState(SortTypesEnum.POPULAR);

  return (
    <div className={'page page--main page--gray'}>
      <Header withNav />
      <main
        className={cn('page__main page__main--index', {
          ['page__main--index-empty']: offers.length === 0,
        })}
      >
        <Helmet>
          <title>Main</title>
        </Helmet>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations activeCity={city} />
        </div>
        <div className="cities">
          {offers.length > 0 ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {getCountWithNoun(offers.length)} to stay in {city.name}
                </b>
                <SortDropdown sortType={sortType} setSortType={setSortType} />
                <Offers
                  isTabs
                  offers={offers}
                  className="cities"
                  sortType={sortType}
                  setActiveCard={setActiveCardId}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  city={city}
                  key={city.name}
                  points={offers}
                  className="cities"
                  selectedPointId={activeCardId}
                />
              </div>
            </div>
          ) : (
            <OffersEmpty />
          )}
        </div>
      </main>
    </div>
  );
}
