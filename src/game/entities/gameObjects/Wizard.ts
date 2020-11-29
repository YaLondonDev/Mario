import {
  MovableGameObject,
  TMovableGameObjectProps,
} from '../../core/models/MovableGameObject';

import WizardSprite from '../../../assets/img/sprites/wizard-sprite.png';
import WizardSpriteIdle from '../../../assets/img/sprites/wizard_sprite-idle.png';
import { ImageResource } from '../../core/ImageResource';
import { keyMap } from '../../core/services/KeyboardService';
import { GameContainer } from '../../core/GameContainer';
import { WIDTH, HEIGHT, WIZARD_SPRITE_INDENT } from '../../consts/size';

enum sprites {
  move = 0,
  stay = 1,
  jump = 2,
}

export class Wizard extends MovableGameObject {
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

  move = () => {
    const { keyboard } = GameContainer;
    const {
      allowedMoveDirections: directions,
      moveSettings: move,
      position,
    } = this;
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

    if (position.y > HEIGHT + WIZARD_SPRITE_INDENT) {
      position.y = HEIGHT + WIZARD_SPRITE_INDENT;
      move.yVelocity = 0;
      move.jumping = false;
    }

    if (position.x < WIZARD_SPRITE_INDENT) {
      position.x = WIZARD_SPRITE_INDENT;
    }

    if (position.x > WIDTH) {
      position.x = WIDTH;
    }
    if (move.xVelocity < 1) {
      this.changeCurrentSpriteIndex(sprites.stay);
    }
  }
}
