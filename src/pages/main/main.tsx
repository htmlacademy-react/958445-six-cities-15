import { useState, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
import { SortTypesEnum } from '../../consts';
import { useAppSelector, useOffersByCity } from '../../hooks';
||||||| 67929b7
=======
import { CITIES } from '../../mocks';
import { SortTypesEnum } from '../../consts';
import { useAppSelector } from '../../hooks';
>>>>>>> 03d87f77cc8a82ef31c67e97c638323814b96fff
import { Locations, Map, Offers, SortDropdown } from '../../components';

<<<<<<< HEAD
export function MainPage(): JSX.Element {
  const offers = useOffersByCity();
  const city = useAppSelector((state) => state.city);
  const [activeCardId, setActiveCardId] = useState<string>('');
  const [sortType, setSortType] = useState(SortTypesEnum.POPULAR);
||||||| 67929b7
type Props = Readonly<{
  city: City;
  cities: City[];
  offers: Offer[];
}>;

export function MainPage(props: Props): JSX.Element {
  const { city, cities, offers } = props;
  const [activeCardId, setActiveCardId] = useState<string>('');
=======
export function MainPage(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers).filter(
    (item) => item.city.name === city.name
  );

  const [activeCardId, setActiveCardId] = useState('');
  const [sortType, setSortType] = useState(SortTypesEnum.POPULAR);
>>>>>>> 03d87f77cc8a82ef31c67e97c638323814b96fff

  return (
    <Fragment>
      <Helmet>
        <title>Main</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
<<<<<<< HEAD
        <Locations activeCity={city} />
||||||| 67929b7
        {city && <Locations cities={cities} activeCity={city} />}
=======
        <Locations cities={CITIES} activeCity={city} />
>>>>>>> 03d87f77cc8a82ef31c67e97c638323814b96fff
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
