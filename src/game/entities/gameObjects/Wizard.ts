/* eslint-disable no-param-reassign */
import {
  MovableGameObject,
  TMovableGameObjectProps,
} from '../../core/models/MovableGameObject';
import {
  TGameObjectProps,
} from '../../core/models/GameObject';

import WizardSprite from '../../../assets/img/sprites/wizard-sprite.png';
import WizardSpriteIdle from '../../../assets/img/sprites/wizard_sprite-idle.png';
import WizardSpriteJump from '../../../assets/img/sprites/wizard_sprite-jump.png';
import { ImageResource } from '../../core/ImageResource';
import { keyMap } from '../../core/services/KeyboardService';
import { GameContainer } from '../../core/GameContainer';
import { WIDTH, HEIGHT, WIZARD_HORIZONTAL_INDENT, WIZARD_VERTICAL_INDENT } from '../../consts/size';
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
        width: 512,
        height: 512,
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

  isCollided = (obstacle:TGameObjectProps, player:any) => {
    if (
      (player.position.x + (player.size.width + WIZARD_HORIZONTAL_INDENT)) > obstacle.position.x
        && player.position.x - WIZARD_HORIZONTAL_INDENT < obstacle.position.x + obstacle.size.width
        && (player.position.y) < obstacle.position.y + obstacle.size.height - WIZARD_VERTICAL_INDENT
        && (player.position.y - WIZARD_VERTICAL_INDENT) + player.size.height > obstacle.position.y
    ) {
      return true;
    }
    return false;
  }

  collideHandler = (obst:TGameObjectProps, player:any) => {
    if (this.isCollided(obst, player)) {
      // eslint-disable-next-line max-len
      if (this.prevPosition.x + (this.size.width + WIZARD_HORIZONTAL_INDENT) >= obst.position.x + obst.size.width) {
        this.position.x = obst.position.x + obst.size.width + WIZARD_HORIZONTAL_INDENT;
        this.moveSettings.xVelocity = 0;
      }
      if (this.prevPosition.x + (this.size.width + WIZARD_HORIZONTAL_INDENT) <= obst.position.x) {
        this.position.x = obst.position.x - (this.size.width + WIZARD_HORIZONTAL_INDENT);
        this.moveSettings.xVelocity = 0;
      }
      if ((this.prevPosition.y - WIZARD_VERTICAL_INDENT) + this.size.height <= obst.position.y) {
        this.position.y = obst.position.y - player.size.height + WIZARD_VERTICAL_INDENT;
        this.moveSettings.yVelocity = 0;
        this.moveSettings.jumping = false;
      }
      if (this.prevPosition.y >= obst.position.y + obst.size.height) {
        this.position.y = obst.position.y + obst.size.height;
        this.moveSettings.yVelocity = 0;
      }
    }
  }

 // eslint-disable-next-line max-len
 coinHandler = (coin:TGameObjectProps, player:any) => {
   if (this.isCollided(coin, player)) {
     this.points += 1;
     coin.position.x = -9999;
   }
 }

  move = () => {
    const { keyboard } = GameContainer;
    // console.log(this);
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
    if (directions.up && keyboard.isKeyPressed(keyMap.UP) && move.jumping === false) {
      move.yVelocity -= 50;
      move.jumping = true;
    }
    move.yVelocity += 1.5;
    position.x += move.xVelocity;
    position.y += move.yVelocity;
    move.xVelocity *= 0.9;
    move.yVelocity *= 0.9;
    if (position.y > HEIGHT + WIZARD_HORIZONTAL_INDENT) {
      position.y = HEIGHT + WIZARD_HORIZONTAL_INDENT;
      move.yVelocity = 0;
      move.jumping = false;
    }

    if (position.x < WIZARD_HORIZONTAL_INDENT) {
      position.x = WIZARD_HORIZONTAL_INDENT;
    }

    if (position.x > WIDTH) {
      position.x = WIDTH;
    }
    if (move.xVelocity < 1) {
      this.changeCurrentSpriteIndex(sprites.stay);
    }

    MapArray.coins.forEach((element:TGameObjectProps) => {
      this.coinHandler(element, this);
    });

    MapArray.obstacles.forEach((element:TGameObjectProps) => {
      this.collideHandler(element, this);
    });
  }
}
