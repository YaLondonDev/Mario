export type TUserProfile = {
  id?: number;
  firstName: string;
  secondName: string;
  displayName?: string;
  login: string;
  email: string;
  phone: string;
  avatar?: string;
};

export type TAuthReducerState = {
  isLoggedIn: boolean;
  isLoading: boolean;
  isFailed: boolean;
  profile: TUserProfile | null;
};

export type TUserReducerState = TUserProfile;
