export type TdataType =
  | Record<string, unknown>
  | Array<Record<string, unknown>>;

export type TResponse = {
  message?: string;
  error?: string;
  data?: TdataType;
  statusCode: number;
};

type TResponseProps = Omit<TResponse, 'error'>;

export class ResponseWorker {
  private static prepareSuccessResponse = ({
    data,
    message = '',
    statusCode = 200,
  }: TResponseProps): TResponse => ({
    data,
    message,
    statusCode,
  });

  private static prepareFailedResponse = ({
    error,
    statusCode = 500,
  }: {
    error: string;
    statusCode: number;
  }): TResponse => ({
    error,
    statusCode,
  });

  static response200 = (data: TdataType) =>
    ResponseWorker.prepareSuccessResponse({
      data,
      message: 'Ok',
      statusCode: 200,
    });

  static response201 = (data: TdataType) =>
    ResponseWorker.prepareSuccessResponse({
      data,
      message: 'Created',
      statusCode: 201,
    });

  static response400 = () =>
    ResponseWorker.prepareFailedResponse({
      error: 'Invalid credentials',
      statusCode: 400,
    });

  static response401 = () =>
    ResponseWorker.prepareFailedResponse({
      error: 'Unauthorized',
      statusCode: 401,
    });

  static response500 = (error: string) =>
    ResponseWorker.prepareFailedResponse({
      error,
      statusCode: 500,
    });
}
