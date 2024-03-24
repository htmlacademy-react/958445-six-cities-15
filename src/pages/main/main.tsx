import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { Locations, Map, Offers, SortDropdown } from '../../components';
import { City, Offer } from '../../types';

type Props = Readonly<{
  city: City;
  cities: City[];
  offers: Offer[];
  activeCardId: string;
  setActiveCardId?: (id: string) => void;
}>;

export function MainPage(props: Props): JSX.Element {
  const { city, cities, offers, activeCardId, setActiveCardId } = props;

  return (
    <Fragment>
      <Helmet>
        <title>Main</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      {city && (
        <div className="tabs">
          <Locations cities={cities} activeCity={city} />
        </div>
      )}
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
          {city && (
            <div className="cities__right-section">
              <Map
                city={city}
                key={city.name}
                points={offers}
                className="cities"
                selectedPointId={activeCardId}
              />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}
