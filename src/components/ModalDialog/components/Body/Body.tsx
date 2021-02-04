import React, { FC } from 'react';

type TBody = {
  children: React.ReactNode;
};

export const Body: FC<TBody> = ({ children }) => <div>{children}</div>;
