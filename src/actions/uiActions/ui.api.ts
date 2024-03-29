import { ApiService } from 'src/services/api.service';
import { TCreateThemePayload, TSetCurrentThemePayload } from './ui.types';

class UiApiService extends ApiService {
  baseUrl = 'https://london-mario-01.ya-praktikum.tech:4444/api/v1';

  fetchCurrentTheme = () => this.get(`/themes/current`);

  fetchAllThemes = () => this.get(`/themes`);

  setCurrentTheme = (data: TSetCurrentThemePayload) =>
    this.put(`/themes/current`, data);

  createTheme = (data: TCreateThemePayload) => this.post(`/themes`, data);
}

export default new UiApiService();
