import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Fragment, useCallback, useEffect, useState } from 'react';

import { api } from '../../store';
import { ApiRoutesEnum } from '../../consts';
import { getCity } from '../../store/selectors';
import { NotFoundPage } from '../not-found/not-found';
import { useAppSelector, useOffersByCity } from '../../hooks';
import { Map, Offers, Rating, Reviews } from '../../components';
import type { Review, ShortOfferType, FullOfferType } from '../../types';

export function OfferPage(): JSX.Element {
  const { id } = useParams();
  const offers = useOffersByCity();
  const city = useAppSelector(getCity);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [offer, setOffer] = useState<null | FullOfferType>(null);
  const [nearPlaces, setNearPlaces] = useState<ShortOfferType[]>([]);
  const [activeCardId, setActiveCardId] = useState<string>(offer?.id ?? '');

  useEffect(() => {
    api
      .get<Review[]>(`${ApiRoutesEnum.COMMENTS}/${id}`)
      .then(({ data }) => setReviews(data));
  }, [id]);

  useEffect(() => {
    if (id) {
      api
        .get<FullOfferType>(`${ApiRoutesEnum.OFFERS}/${id}`)
        .then(({ data }) => setOffer(data));

      api
        .get<ShortOfferType[]>(`${ApiRoutesEnum.OFFERS}/${id}/nearby`)
        .then(({ data }) => setNearPlaces(data));
    }
  }, [id, offers]);

  const sendReview = useCallback(
    (review: Pick<Review, 'comment' | 'rating'>) => {
      api
        .post<Review>(`${ApiRoutesEnum.COMMENTS}/${id}`, review)
        .then(({ data }) => setReviews((prev) => [...prev, data]));
    },
    [id]
  );

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
                {offer.type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {offer.bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {offer.maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{offer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {offer.goods.map((item) => (
                  <li key={item} className="offer__inside-item">
                    {item}
                  </li>
                ))}
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
                    src={offer.host.avatarUrl}
                    className="offer__avatar user__avatar"
                  />
                </div>
                <span className="offer__user-name">{offer.host.name}</span>
                {offer.host.isPro && (
                  <span className="offer__user-status">Pro</span>
                )}
              </div>
              <div className="offer__description">
                <p className="offer__text">{offer.description}</p>
              </div>
            </div>
            <Reviews reviews={reviews} handleSubmit={sendReview} />
          </div>
        </div>
        <Map
          city={city}
          className="offer"
          selectedPointId={activeCardId}
          points={[...nearPlaces, offer]}
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <Offers
            isTabs
            offers={nearPlaces}
            className="near-places"
            setActiveCard={setActiveCardId}
          />
        </section>
      </div>
    </Fragment>
  ) : (
    <NotFoundPage />
  );
}
