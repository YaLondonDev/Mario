import { TSignInPayload } from '../../actions/authActions/auth.types';

export type TSignInFormProps = {
  onSubmit: (form: TSignInPayload) => void;
};
