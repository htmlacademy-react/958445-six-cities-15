import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';

import { useMap } from './hooks';
import type { City, ShortOfferType } from '../../types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from './consts';

type Point = Readonly<Pick<ShortOfferType, 'id' | 'location'>>;

type Props = Readonly<{
  city: City;
  points: Point[];
  className: string;
  selectedPointId: string;
}>;

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export function Map(props: Props) {
  const { city, points, className, selectedPointId } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach(({ id, location }) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker
          .setIcon(
            id === selectedPointId ? currentCustomIcon : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPointId]);

  return (
    <section className={`${className}__map map`}>
      <div style={{ height: '100%' }} ref={mapRef}></div>
    </section>
  );
}
