import { TSignUpPayload } from '../../actions/authActions/auth.types';

export type TSignUpFormProps = {
  onSubmit: (form: TSignUpPayload) => void;
};
