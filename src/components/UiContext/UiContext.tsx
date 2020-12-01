import React from 'react';

import { TUiSettings } from '../../App';

export type TUiContext = {
  uiSettings: TUiSettings,
  setUiSettings: (settings: TUiSettings) => void,
}

export const UiContext = React.createContext<TUiContext>(null);
