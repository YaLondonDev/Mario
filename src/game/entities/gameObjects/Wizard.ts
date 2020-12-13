import {
  MovableGameObject,
  TMovableGameObjectProps,
} from '../../core/models/MovableGameObject';
import { TGameObjectProps } from '../../core/models/GameObject';

import WizardSprite from '../../../assets/img/sprites/wizard-sprite.png';
import WizardSpriteIdle from '../../../assets/img/sprites/wizard_sprite-idle.png';
import WizardSpriteJump from '../../../assets/img/sprites/wizard_sprite-jump.png';
import { ImageResource } from '../../core/ImageResource';
import { keyMap } from '../../core/services/KeyboardService';
import { GameContainer } from '../../core/GameContainer';
import { CANVAS, WIZARD } from '../../consts/size';
import { MapArray } from '../maps/testMapArray';

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

  isCollided = (obstacle: TGameObjectProps, player: any) => {
    const isCollideLeft =
      player.position.x + (player.size.width + WIZARD.horizontal_indent) >
      obstacle.position.x;
    const isCollideRight =
      player.position.x - WIZARD.horizontal_indent <
      obstacle.position.x + obstacle.size.width;
    const isCollideTop =
      player.position.y <
      obstacle.position.y + obstacle.size.height - WIZARD.vertical_indent;
    const isCollideBottom =
      player.position.y - WIZARD.vertical_indent + player.size.height >
      obstacle.position.y;

    if (isCollideLeft && isCollideRight && isCollideTop && isCollideBottom) {
      return true;
    }
    return false;
  };

  collideHandler = (obstacle: TGameObjectProps, player: any) => {
    if (this.isCollided(obstacle, player)) {
      const isCollideRight =
        this.prevPosition.x + (this.size.width + WIZARD.horizontal_indent) >=
        obstacle.position.x + obstacle.size.width;
      const isCollideLeft =
        this.prevPosition.x + (this.size.width + WIZARD.horizontal_indent) <=
        obstacle.position.x;
      const isCollideTop =
        this.prevPosition.y - WIZARD.vertical_indent + this.size.height <=
        obstacle.position.y;
      const isCollideBottom =
        this.prevPosition.y >= obstacle.position.y + obstacle.size.height;

      if (isCollideRight) {
        this.position.x =
          obstacle.position.x + obstacle.size.width + WIZARD.horizontal_indent;
        this.moveSettings.xVelocity = 0;
      }
      if (isCollideLeft) {
        this.position.x =
          obstacle.position.x - (this.size.width + WIZARD.horizontal_indent);
        this.moveSettings.xVelocity = 0;
      }
      if (isCollideTop) {
        this.position.y =
          obstacle.position.y - player.size.height + WIZARD.vertical_indent;
        this.moveSettings.yVelocity = 0;
        this.moveSettings.jumping = false;
      }
      if (isCollideBottom) {
        this.position.y = obstacle.position.y + obstacle.size.height;
        this.moveSettings.yVelocity = 0;
      }
    }
  };

  coinHandler = (coin: TGameObjectProps, player: any) => {
    if (this.isCollided(coin, player)) {
      this.points += 1;
      // eslint-disable-next-line no-param-reassign
      coin.position.x = -9999;
    }
  };

  move = () => {
    const { keyboard } = GameContainer;
    const {
      allowedMoveDirections: directions,
      moveSettings: move,
      position,
    } = this;

    this.prevPosition.x = position.x;
    this.prevPosition.y = position.y;

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
    position.x += move.xVelocity;
    position.y += move.yVelocity;
    move.xVelocity *= 0.9;
    move.yVelocity *= 0.9;
    if (position.y > CANVAS.height + WIZARD.horizontal_indent) {
      position.y = CANVAS.height + WIZARD.horizontal_indent;
      move.yVelocity = 0;
      move.jumping = false;
    }

    if (position.x < WIZARD.horizontal_indent) {
      position.x = WIZARD.horizontal_indent;
    }

    if (position.x > CANVAS.width) {
      position.x = CANVAS.width;
    }
    if (move.xVelocity < 1) {
      this.changeCurrentSpriteIndex(sprites.stay);
    }

    MapArray.coins.forEach((element: TGameObjectProps) => {
      this.coinHandler(element, this);
    });

    MapArray.obstacles.forEach((element: TGameObjectProps) => {
      this.collideHandler(element, this);
    });
  };
}
