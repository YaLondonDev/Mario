import React, { FC } from 'react';
import Helmet from 'react-helmet';

import { TMetaProps } from './types';

export const Meta: FC<TMetaProps> = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    {Boolean(description) && <meta name="description" content={description} />}
  </Helmet>
);
