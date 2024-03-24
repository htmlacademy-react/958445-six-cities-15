import { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { CITIES, OFFERS } from '../../mocks';
import { setCity, setOffers } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Locations, Map, Offers, SortDropdown } from '../../components';

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

  useEffect(() => {
    dispatch(setCity(CITIES[0]));
  }, [dispatch]);

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
          <Locations cities={CITIES} activeCity={city} />
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
