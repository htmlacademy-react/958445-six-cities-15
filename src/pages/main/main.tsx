import { useState, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { Locations, Map, Offers, SortDropdown } from '../../components';
import { City, Offer } from '../../types';

type Props = Readonly<{
  city: City;
  cities: City[];
  offers: Offer[];
}>;

export function MainPage(props: Props): JSX.Element {
  const { city, cities, offers } = props;
  const [activeCardId, setActiveCardId] = useState<string>('');

  return (
    <Fragment>
      <Helmet>
        <title>Main</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        {city && <Locations cities={cities} activeCity={city} />}
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {offers.length} places to stay in {city?.name}
            </b>
            <SortDropdown />
            <Offers
              isTabs
              offers={offers}
              className="cities"
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
