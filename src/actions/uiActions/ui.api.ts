import { ApiService } from 'src/services/api.service';
import { TCreateThemePayload, TSetCurrentThemePayload } from './ui.types';

class UiApiService extends ApiService {
  fetchCurrentTheme = () =>
    this.get(`https://mario.ya-praktikum.tech:4444/api/v1/themes/current`);

  fetchAllThemes = () =>
    this.get(`https://mario.ya-praktikum.tech:4444/api/v1/themes/`);

  setCurrentTheme = (data: TSetCurrentThemePayload) =>
    this.put(
      `https://mario.ya-praktikum.tech:4444/api/v1/themes/current`,
      data,
    );

  createTheme = (data: TCreateThemePayload) =>
    this.post(`https://mario.ya-praktikum.tech:4444/api/v1/themes`, data);
}

export default new UiApiService();
