import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const HTTP_REGEX = /^https?:\/\/.*$/;

export class ApiService {
  protected baseUrl = 'https://ya-praktikum.tech/api/v2';

  private prepareUrl(url: string): string {
    if (HTTP_REGEX.test(url)) {
      return url;
    }

    return `${this.baseUrl}${url}`;
  }

  public get = <T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => axios.get(this.prepareUrl(url), config);

  public post = <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> =>
    axios.post(this.prepareUrl(url), data, config);

  public put = <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => axios.put(this.prepareUrl(url), data, config);

  public delete = <T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> => axios.delete(this.prepareUrl(url), config);

  public patch = <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> =>
    axios.patch(this.prepareUrl(url), data, config);
}

export default new ApiService();
