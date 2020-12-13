import React, { FC, useEffect } from 'react';

import { useGeolocation } from 'src/hooks/useGeolocation';

import styles from './geolocation.module.scss';

export const Geolocation: FC = () => {
  const [location, requestLocation] = useGeolocation();

  useEffect(() => {
    requestLocation();
  }, []);

  if (!location) {
    return null;
  }

  return <div className={styles.geolocation}>{location}</div>;
};
