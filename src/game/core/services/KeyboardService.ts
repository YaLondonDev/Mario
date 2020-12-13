import { isServer } from '../../../utils/isServer';

// Коды основных игровых клавиш
export enum keyMap {
  LEFT = 37,
  RIGHT = 39,
  UP = 38,
  DOWN = 40,
  SPACE = 32,
  SHIFT = 16,
  ESC = 27,
}

// Сервис для работы с клавиатурой
export class KeyboardService {
  // тут хранятся коды нажатых в текущий момент клавиш
  private pressed: Set<number> = new Set();

  constructor() {
    this.initHandlers();
  }

  private initHandlers = () => {
    if (!isServer()) {
      document.addEventListener('keydown', this.onKeyDown);
      document.addEventListener('keyup', this.onKeyUp);
    }
  };

  // По нажатию, добавляет код клавиши в pressed
  private onKeyDown = (e: KeyboardEvent) => {
    const code = e.keyCode;
    this.pressed.add(code);
  };

  // По отпусканию, удаляет код клавиши из pressed
  private onKeyUp = (e: KeyboardEvent) => {
    const code = e.keyCode;
    this.pressed.delete(code);
  };

  // чистит pressed
  public reset = () => {
    this.pressed.clear();
  };

  // возвращает true если клавиша с текущим кодом была нажата
  public isKeyPressed = (key: keyMap): boolean => this.pressed.has(key);
}
