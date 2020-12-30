import { GameContainer } from '../GameContainer';
import { ImageResource } from '../ImageResource';
import { CanvasService } from '../services/CanvasService';
import { GameMap } from './GameMap';

export type TPosition = {
  x: number;
  y: number;
};

export type TSize = {
  width: number;
  height: number;
};

export type TGameObjectProps = {
  map: GameMap;
  context: CanvasRenderingContext2D;
  size?: TSize;
  position?: TPosition;
  sprites?: TSprite[];
};

export type TSpriteOptions = {
  sprites: TSprite[];
  currentFrame: number;
  currentSpriteIndex: number;
};

export type TSprite = {
  resource: ImageResource;
  frames: number;
};

// Супер-класс, который представляет игровой объект, имеющий
// свои размеры, координаты и поведение
export class GameObject {
  map: GameMap;

  // 2d контекст
  context: CanvasRenderingContext2D;

  public points: number = 0;

  // параметры спрайтов - объект, который содержит в себе 3 свойства:
  // 1. sprites[] - массив типа TSprite, представляет собой
  // один или несколько спрайтов для объекта
  // 2. currentFrame - текущий кадр и текущем спрайте
  // 3. currentSpriteIndex - индекс текущего спрайта
  protected spriteOptions: TSpriteOptions = {
    sprites: [],
    currentFrame: 1,
    currentSpriteIndex: 0,
  };

  protected originalPosition: TPosition = { x: 0, y: 0 };

  protected _x: number = 0;

  protected _y: number = 0;

  // высота и ширина объекта
  public size: TSize = {
    width: 100,
    height: 100,
  };

  constructor(props: TGameObjectProps) {
    const cs = CanvasService.getInstance();
    const { size, position, context, sprites, map } = props;
    this.map = map;
    this.context = context;
    if (size) {
      this.size = size;
    }
    if (position) {
      this.y = position.y;
      this.x = position.x;
      this.originalPosition = { ...position };
    }
    if (sprites) {
      this.spriteOptions.sprites = sprites;
    }
    cs.handleResize(this.onCanvasResize);
  }

  private onCanvasResize = () => {
    this.y = this.originalPosition.y;
    this.x = this.originalPosition.x;
  };

  set y(value: number) {
    const cs = CanvasService.getInstance();
    this._y = cs.y(value);
  }

  get y() {
    const cs = CanvasService.getInstance();
    return cs.y(this._y);
  }

  set x(value: number) {
    this._x = value;
  }

  get x() {
    return this._x;
  }

  incrementY = (value: number) => {
    this._y -= value;
  };

  decrementY = (value: number) => {
    this._y += value;
  };

  incrementX = (value: number) => {
    this._x += value;
  };

  decrementX = (value: number) => {
    this._x -= value;
  };

  // Возвращает все ресуры текущего игрового объекта.
  // К этому методу обращается карта, когда загружает все ресуры
  public getResources = () =>
    this.spriteOptions.sprites.map((sprite) => sprite.resource);

  // Изменяет индекс спрайта для объекта
  public changeCurrentSpriteIndex = (index: number) => {
    this.spriteOptions.currentSpriteIndex = index;
  };

  // устанавливает размеры объекта
  public setSize = (size: TSize) => {
    this.size = { ...size };
  };

  // метод, который занимается отображением текущего кадра
  // текущего спрайта
  private spriteTick = () => {
    const {
      spriteOptions: { currentFrame },
    } = this;

    // получаем текущий спрайт
    const currentSprite = this.getCurrentSprite();
    if (!currentSprite || currentSprite.frames <= 1) {
      // если спрайтов у нас нет, то не нужно работать с ними вовсе
      return;
    }

    // если текущий кадр больше чем всего кадров в спрайте,
    // то устанавливаем текущим первый кадр
    if (currentFrame > currentSprite.frames) {
      this.setCurrentFrame(1);
      return;
    }

    // иначе делаем текущим следующий кадр
    this.setCurrentFrame(currentFrame + 1);
  };

  // Устанавливает текущий кадр
  private setCurrentFrame = (frame: number) => {
    this.spriteOptions.currentFrame = frame;
  };

  // получение текущего спрайта
  private getCurrentSprite = () => {
    const {
      spriteOptions: { currentSpriteIndex, sprites },
    } = this;
    return sprites[currentSpriteIndex];
  };

  // Метод отрисовки объекта
  public render() {
    const currentSprite = this.getCurrentSprite();
    const { context, size, y } = CanvasService.getInstance();
    // если объект со спрайтами, то
    if (currentSprite) {
      // рисуем текущий кадр спрайта
      this.context.drawImage(
        currentSprite.resource.getImage(), // получаем само изображение(спрайт)
        (this.spriteOptions.currentFrame - 1) * this.size.width, // отступ от левого верхнего края
        // изображения (таким образом вырезаем именно текущий кадр)
        0, // отступ по координате y от левого верънего края изображения
        this.size.width, // ширина обрезаемой области
        this.size.height, // высота обрезаемой области
        this.x, // координата x на которой будет отрисовано изображение
        y(size.height - this._y), // координата y на которой будет отрисовано изображение
        this.size.width, // ширина в которую будет вмещен текущий кадр
        this.size.height, // высота в которую будет вмещен текущий кадр
      );
      if (this.points) {
        context.fillStyle = '#f93b3b';
        context.font = 'normal 120px Arial';
        context.fillText(this.points.toString(), 20, 220);
      }
      this.spriteTick(); // после отрисовки меняем кадр на следующий
    }
    if (GameContainer.config.isDebug()) {
      // если включен дебаг, то рисуем
      context.strokeStyle = 'red'; // красную рамку вокруг объекта
      context.strokeRect(this._x, this._y, this.size.width, this.size.height);
      context.font = 'normal 30px Arial';
      context.fillStyle = 'yellow';
      context.fillText(
        `[${this.x.toFixed(1)}, ${this.y.toFixed(1)}]`,
        this._x,
        this._y,
      );
    }
  }
}
