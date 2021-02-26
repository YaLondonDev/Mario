const baseUrl = 'https://london-mario-01.ya-praktikum.tech:4444/api/v1';

export type TCreateFeedbackPayload = {
  userName: string;
  email: string;
  message: string;
};

export const getFeedback = (): Promise<Response> =>
  fetch(`${baseUrl}/feedback`, {
    method: 'GET',
  });

export const addFeedback = (data: TCreateFeedbackPayload): Promise<Response> =>
  fetch(`${baseUrl}/feedback`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
