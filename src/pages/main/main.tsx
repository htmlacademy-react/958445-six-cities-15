import { useState, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { SortTypesEnum } from '../../consts';
import { getCity } from '../../store/selectors';
import { useAppSelector, useOffersByCity } from '../../hooks';
import { Locations, Map, Offers, SortDropdown } from '../../components';

export function MainPage(): JSX.Element {
  const offers = useOffersByCity();
  const city = useAppSelector(getCity);
  const [activeCardId, setActiveCardId] = useState<string>('');
  const [sortType, setSortType] = useState(SortTypesEnum.POPULAR);

  return (
    <Fragment>
      <Helmet>
        <title>Main</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <Locations activeCity={city} />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {offers.length} places to stay in {city.name}
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
      </div>
    </Fragment>
  );
}
