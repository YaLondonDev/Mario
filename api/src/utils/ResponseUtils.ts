export type TDataType =
  | Record<string, unknown>
  | Array<Record<string, unknown>>
  | number
  | string;

export type TResponse = {
  message?: string;
  error?: string;
  data?: TDataType;
  statusCode: number;
};

type TResponseProps = Omit<TResponse, 'error'>;

export class ResponseUtils {
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

  static response200 = (data: TDataType) =>
    ResponseUtils.prepareSuccessResponse({
      data,
      message: 'Ok',
      statusCode: 200,
    });

  static response201 = (data: TDataType) =>
    ResponseUtils.prepareSuccessResponse({
      data,
      message: 'Created',
      statusCode: 201,
    });

  static response400 = () =>
    ResponseUtils.prepareFailedResponse({
      error: 'Invalid credentials',
      statusCode: 400,
    });

  static response401 = () =>
    ResponseUtils.prepareFailedResponse({
      error: 'Unauthorized',
      statusCode: 401,
    });

  static response500 = (error: string) =>
    ResponseUtils.prepareFailedResponse({
      error,
      statusCode: 500,
    });
}
