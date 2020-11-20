import { GameObject, TGameObjectProps } from './GameObject';

export type TMovableGameObjectProps = TGameObjectProps & {
  allowedMoveDirections?: Partial<TAllowedMoveDirections>;
  moveSettings?: TMoveSettings;
};

export type TAllowedMoveDirections = {
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
};

export type TMoveSettings = {
  xVelocity: number,
  yVelocity: number,
  jumping: boolean,
};

// наследник от GameObject, который умеет двигаться
export class MovableGameObject extends GameObject {
  // параметры движения. Можно указать в какую сторону объект может
  // двигаться, а в какую нет
  protected allowedMoveDirections: TAllowedMoveDirections = {
    left: false,
    right: false,
    up: false,
    down: false,
  };

  // параметры применяемые к движению, в данном случае только скорость движения
  protected moveSettings: TMoveSettings = {
    xVelocity: 0,
    yVelocity: 0,
    jumping: true,
  };

  constructor(props: TMovableGameObjectProps) {
    super(props);

    const { allowedMoveDirections, moveSettings } = props;
    if (allowedMoveDirections) {
      this.allowedMoveDirections = {
        ...this.allowedMoveDirections,
        ...allowedMoveDirections,
      };
    }
    if (moveSettings) {
      this.moveSettings = { ...this.moveSettings, ...moveSettings };
    }
  }

  // метод движения, может быть переопределен наследником
  // это базовая реализация завязана на движение вверх, вниз, влево, вправо,
  // в зависимости от нажатия клавиш на клавиатуре
  // (обратите внимание на работу с сервисом клавиатуры)
  public move = () => {

  };

  render() {
    super.render();
    this.move();
  }
}
