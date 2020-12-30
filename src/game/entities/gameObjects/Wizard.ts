import {
  MovableGameObject,
  TMovableGameObjectProps,
} from '../../core/models/MovableGameObject';
import { GameObject } from '../../core/models/GameObject';

import WizardSprite from '../../../assets/img/sprites/wizard-sprite.png';
import WizardSpriteIdle from '../../../assets/img/sprites/wizard_sprite-idle.png';
import WizardSpriteJump from '../../../assets/img/sprites/wizard_sprite-jump.png';
import { ImageResource } from '../../core/ImageResource';
import { keyMap } from '../../core/services/KeyboardService';
import { GameContainer } from '../../core/GameContainer';
import { WIZARD } from '../../consts/size';
import { Coin } from './Coin';
import { CanvasService } from '../../core/services/CanvasService';

enum sprites {
  move = 0,
  stay = 1,
  jump = 2,
}

export type TPosition = {
  x: number;
  y: number;
};

export class Wizard extends MovableGameObject {
  // Координаты x,y объекта на холсте
  protected prevPosition: TPosition = {
    x: 0,
    y: 0,
  };

  constructor(props: TMovableGameObjectProps) {
    super({
      size: {
        width: WIZARD.width,
        height: WIZARD.height,
      },
      moveSettings: {
        xVelocity: 0,
        yVelocity: 0,
        jumping: true,
      },
      sprites: [
        {
          resource: new ImageResource(WizardSprite),
          frames: 39,
        },
        {
          resource: new ImageResource(WizardSpriteIdle),
          frames: 19,
        },
        {
          resource: new ImageResource(WizardSpriteJump),
          frames: 5,
        },
      ],
      allowedMoveDirections: {
        up: true,
        left: true,
        right: true,
        down: true,
      },
      ...props,
    });
  }

  // Доделать колизию монеток
  isCollided = (obstacle: GameObject) => {
    const isCollideLeft =
      this.x + this.size.width - WIZARD.horizontal_indent >= obstacle.x;
    const isCollideRight =
      this.x - WIZARD.horizontal_indent <= obstacle.x + obstacle.size.width;
    const isCollideTop = this.y - this.size.height >= obstacle.y;
    const isCollideBottom = this.y <= obstacle.y + obstacle.size.height;

    if (isCollideLeft || isCollideRight || isCollideTop || isCollideBottom) {
      return true;
    }
    return false;
  };

  collideHandler = (obstacle: GameObject) => {
    if (this.checkCollision(obstacle)) {
      if (
        this.prevPosition.x + WIZARD.horizontal_indent >=
        obstacle.x + obstacle.size.width
      ) {
        this.x = obstacle.x + obstacle.size.width - WIZARD.horizontal_indent;
        this.moveSettings.xVelocity = 0;
      }
      if (
        this.prevPosition.x + this.size.width - WIZARD.horizontal_indent <=
        obstacle.x
      ) {
        this.x = obstacle.x - this.size.width + WIZARD.horizontal_indent;
        this.moveSettings.xVelocity = 0;
      }
      if (
        this.prevPosition.y - (this.size.height - WIZARD.vertical_indent) >=
        obstacle.y
      ) {
        this.y = obstacle.y + this.size.height - WIZARD.vertical_indent;
        this.moveSettings.yVelocity = 0;
        this.moveSettings.jumping = false;
      }
      if (
        this.prevPosition.y - WIZARD.vertical_indent <=
        obstacle.y - obstacle.size.height
      ) {
        this.moveSettings.yVelocity += 30;
      }
    }
  };

  checkCollision = (obstacle: GameObject) =>
    this.x < obstacle.x + obstacle.size.width - WIZARD.horizontal_indent &&
    this.x + this.size.width - WIZARD.horizontal_indent > obstacle.x &&
    this.y > obstacle.y - (obstacle.size.height - WIZARD.vertical_indent) &&
    this.y - (this.size.height - WIZARD.vertical_indent) < obstacle.y;

  coinHandler = (coin: GameObject) => {
    if (this.checkCollision(coin)) {
      this.points += 1;
      // eslint-disable-next-line no-param-reassign
      coin.x = -9999;
    }
  };

  move = () => {
    const { keyboard } = GameContainer;
    const { allowedMoveDirections: directions, moveSettings: move } = this;
    const cs = CanvasService.getInstance();

    this.prevPosition.x = this.x;
    this.prevPosition.y = this.y;

    if (directions.left && keyboard.isKeyPressed(keyMap.LEFT)) {
      this.changeCurrentSpriteIndex(sprites.move);
      move.xVelocity -= 1;
    } else if (directions.right && keyboard.isKeyPressed(keyMap.RIGHT)) {
      this.changeCurrentSpriteIndex(sprites.move);
      move.xVelocity += 1;
    }
    if (
      directions.up &&
      keyboard.isKeyPressed(keyMap.UP) &&
      move.jumping === false
    ) {
      move.yVelocity -= 50;
      move.jumping = true;
    }
    move.yVelocity += 1.5;
    this.incrementX(move.xVelocity);
    this.decrementY(move.yVelocity);
    move.xVelocity *= 0.9;
    move.yVelocity *= 0.9;
    if (this.y - (WIZARD.height - WIZARD.vertical_indent) <= 0) {
      this.y = this.size.height - WIZARD.vertical_indent;
      move.yVelocity = 0;
      move.jumping = false;
    }

    if (this.x < WIZARD.horizontal_indent) {
      this.x = WIZARD.horizontal_indent;
    }

    if (this.x > cs.size.width) {
      this.x = cs.size.width - this.size.width;
    }
    if (move.xVelocity < 1) {
      this.changeCurrentSpriteIndex(sprites.stay);
    }

    this.collideObjects();
  };

  collideObjects = () => {
    this.map.getObjects().forEach((obj) => {
      if (obj instanceof Wizard) {
        return;
      }
      if (obj instanceof Coin) {
        this.coinHandler(obj);
      } else {
        this.collideHandler(obj);
      }
    });
  };
}
