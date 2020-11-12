import {
  MovableGameObject,
  TMovableGameObjectProps,
} from '../../core/models/MovableGameObject';

import WizardSprite from '../../../assets/img/sprites/wizard-sprite.png';
import { ImageResource } from '../../core/ImageResource';

export class Wizard extends MovableGameObject {
  constructor(props: TMovableGameObjectProps) {
    super({
      size: {
        width: 512,
        height: 512,
      },
      moveSettings: {
        speed: 7,
      },
      sprites: [
        {
          resource: new ImageResource(WizardSprite),
          frames: 39,
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
}
