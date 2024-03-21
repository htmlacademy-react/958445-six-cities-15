import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { Fragment, useEffect, useMemo, useState } from 'react';

import type { City, Offer } from '../../types';
import { NotFoundPage } from '../not-found/not-found';
import { Map, Offers, Rating, Reviews } from '../../components';

type Props = {
  city: City;
  activeCardId: string;
  offers: ReadonlyArray<Offer>;
  setActiveCardId?: (id: string) => void;
};

export function OfferPage({
  city,
  offers,
  activeCardId,
  setActiveCardId,
}: Props): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();
  const [offer, setOffer] = useState<null | Offer>(null);
  const points = useMemo(
    () =>
      offers.map((item) => ({
        id: item.id,
        location: item.location,
      })),
    [offers]
  );

  useEffect(() => {
    if (id?.length) {
      const offerData = offers.find((item) => item.id === id);

      if (offerData) {
        setOffer(offerData);
      }
    }
  }, [id, navigate, offers]);

  return offer ? (
    <Fragment>
      <Helmet>
        <title>{offer.title}</title>
      </Helmet>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            <div className="offer__image-wrapper">
              <img
                src="img/room.jpg"
                alt="Photo studio"
                className="offer__image"
              />
            </div>
            <div className="offer__image-wrapper">
              <img
                alt="Photo studio"
                className="offer__image"
                src="img/apartment-01.jpg"
              />
            </div>
            <div className="offer__image-wrapper">
              <img
                alt="Photo studio"
                className="offer__image"
                src="img/apartment-02.jpg"
              />
            </div>
            <div className="offer__image-wrapper">
              <img
                alt="Photo studio"
                className="offer__image"
                src="img/apartment-03.jpg"
              />
            </div>
            <div className="offer__image-wrapper">
              <img
                alt="Photo studio"
                src="img/studio-01.jpg"
                className="offer__image"
              />
            </div>
            <div className="offer__image-wrapper">
              <img
                alt="Photo studio"
                className="offer__image"
                src="img/apartment-01.jpg"
              />
            </div>
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {offer.isPremium && (
              <div className="offer__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{offer.title}</h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <Rating withValue rating={offer.rating} className="offer" />
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                Apartment
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                3 Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max 4 adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{offer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                <li className="offer__inside-item">Wi-Fi</li>
                <li className="offer__inside-item">Washing machine</li>
                <li className="offer__inside-item">Towels</li>
                <li className="offer__inside-item">Heating</li>
                <li className="offer__inside-item">Coffee machine</li>
                <li className="offer__inside-item">Baby seat</li>
                <li className="offer__inside-item">Kitchen</li>
                <li className="offer__inside-item">Dishwasher</li>
                <li className="offer__inside-item">Cabel TV</li>
                <li className="offer__inside-item">Fridge</li>
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    width="74"
                    height="74"
                    alt="Host avatar"
                    src="img/avatar-angelina.jpg"
                    className="offer__avatar user__avatar"
                  />
                </div>
                <span className="offer__user-name">Angelina</span>
                <span className="offer__user-status">Pro</span>
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  A quiet cozy and picturesque that hides behind a a river by
                  the unique lightness of Amsterdam. The building is green and
                  from 18th century.
                </p>
                <p className="offer__text">
                  An independent House, strategically located between Rembrand
                  Square and National Opera, but where the bustle of the city
                  comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <Reviews />
          </div>
        </div>
        <Map
          city={city}
          points={points}
          className="offer"
          selectedPointId={activeCardId}
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <Offers
            isTabs
            className="near-places"
            setActiveCard={setActiveCardId}
            offers={offers.filter((item) => item.id !== offer.id)}
          />
        </section>
      </div>
    </Fragment>
  ) : (
    <NotFoundPage />
  );
}
