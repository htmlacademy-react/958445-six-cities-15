import { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { sendReviewHandler } from './utils';
import { useAppSelector } from '../../hooks';
import { getCity } from '../../store/city/selectors';
import { NotFoundPage } from '../not-found/not-found';
import { useNearPlaces, useOffers, useReviews } from './hooks';
import { Map, Offers, Rating, Reviews, Bookmark } from '../../components';

export function OfferPage(): JSX.Element {
  const { id } = useParams();
  const offer = useOffers(id);
  const nearPlaces = useNearPlaces(id);
  const city = useAppSelector(getCity);
  const [reviews, setReviews] = useReviews(id);
  const sendReview = sendReviewHandler(setReviews, id);
  const [activeCardId, setActiveCardId] = useState<string>(offer?.id ?? '');

  return offer ? (
    <Fragment>
      <Helmet>
        <title>{offer.title}</title>
      </Helmet>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {offer.images.map((imageUrl) => (
              <div key={imageUrl} className="offer__image-wrapper">
                <img
                  src={imageUrl}
                  alt="Photo studio"
                  className="offer__image"
                />
              </div>
            ))}
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
              <Bookmark size="BIG" offer={offer} className="offer" />
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
