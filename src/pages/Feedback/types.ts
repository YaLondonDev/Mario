export type TFeedbackPayload = {
    userName: string;
    email: string;
    message: string;
};

export type TFeedbackFormProps = {
  onSubmit: (form: TFeedbackPayload) => void;
};
