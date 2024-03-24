import { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { CITIES, OFFERS } from '../../mocks';
import { Locations, Map, Offers } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadCities, setCity, setOffers } from '../../store/action';

type Props = {
  activeCardId: string;
  setActiveCardId?: (id: string) => void;
};

export function MainPage({
  activeCardId,
  setActiveCardId,
}: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const cities = useAppSelector((state) => state.cities);

  useEffect(() => {
    dispatch(loadCities(CITIES));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCity(cities[0]));
  }, [cities, dispatch]);

  useEffect(() => {
    if (city) {
      dispatch(
        setOffers(OFFERS.filter((item) => item.city.name === city.name))
      );
    }
  }, [city, dispatch]);

  return (
    <Fragment>
      <Helmet>
        <title>Main</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      {city && (
        <div className="tabs">
          <Locations activeCity={city} />
        </div>
      )}
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {offers.length} places to stay in {city?.name}
            </b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li
                  className="places__option places__option--active"
                  tabIndex={0}
                >
                  Popular
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                  Top rated first
                </li>
              </ul>
            </form>
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
