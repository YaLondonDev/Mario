import { useCallback, useState } from 'react';
import { get } from '../utils/deepFind';
import api from '../services/api.service';

const yaApiKey = '6c93de1d-bd6a-4804-af16-361e2056abfa';

const getApiUrl = (longitude: number, latitude: number) =>
  `https://geocode-maps.yandex.ru/1.x/?apikey=${yaApiKey}&geocode=${longitude},${latitude}&results=1&format=json`;

export const useGeolocation = (): [string, () => void] => {
  const [location, setLocation] = useState('');

  const handleSuccess = useCallback(
    async (position: Position) => {
      const {
        coords: { longitude, latitude },
      } = position;

      try {
        const {
          data: { response },
        } = await api.get(getApiUrl(longitude, latitude), {
          withCredentials: false,
        });
        const [featureMember] = get(
          response,
          'GeoObjectCollection.featureMember',
        ) as Array<any>;
        const addressText = get(
          featureMember,
          'GeoObject.metaDataProperty.GeocoderMetaData.text',
        );
        const [country, city] = addressText.split(', ');
        setLocation(`${country}, ${city}`);
      } catch (err) {
        setLocation('');
      }
    },
    [setLocation],
  );

  const requestLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(handleSuccess);
  }, [handleSuccess]);

  return [location, requestLocation];
};
