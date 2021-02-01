import { API_PREFIX, API_VERSION, API_ENDPOINT } from '../../api/src/utils/consts';

export type TCreateFeedbackPayload = {
  userName: string;
  email: string;
  message: string;
};

export const getFeedback = (): Promise<Response> => fetch(`${API_ENDPOINT}/${API_PREFIX}/${API_VERSION}/feedback`, {
  method: 'GET',
});

export const addFeedback = (data:TCreateFeedbackPayload): Promise<Response> => fetch(`${API_ENDPOINT}/${API_PREFIX}/${API_VERSION}/feedback`, {
  method: 'POST',
  body: JSON.stringify(data),
});
