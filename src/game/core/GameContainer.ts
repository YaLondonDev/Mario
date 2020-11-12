import { ConfigService } from './services/ConfigService';
import { KeyboardService } from './services/KeyboardService';

// провайдер который предоставляет доступ к сервисам
export class GameContainer {
  // сервис глобальной конфигурации
  static config: ConfigService = new ConfigService();

  // сервис для работы с клавиатурой
  static keyboard: KeyboardService = new KeyboardService();

  // потом можно будет добавить сервис для работы с мышью
}
