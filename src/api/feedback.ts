export type TCreateFeedbackPayload = {
  userName: string;
  email: string;
  message: string;
};

export const getFeedback = (): Promise<Response> => fetch(`https://mario.ya-praktikum.tech:4444/api/v1/feedback`, {
  method: 'GET',
});

export const addFeedback = (data:TCreateFeedbackPayload): Promise<Response> => fetch(`https://mario.ya-praktikum.tech:4444/api/v1/feedback`, {
  method: 'POST',
  body: JSON.stringify(data),
});
