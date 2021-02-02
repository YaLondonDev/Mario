import {
  MovableGameObject,
  TMovableGameObjectProps,
} from '../../core/models/MovableGameObject';

import enemySprite from '../../../assets/img/sprites/rsz_enemy.png';
import { ImageResource } from '../../core/ImageResource';
import { ENEMY } from '../../consts/size';

export type TPosition = {
    x: number;
    y: number;
  };

export class Enemy extends MovableGameObject {
    // Координаты x,y объекта на холсте
    protected prevPosition: TPosition = {
      x: 0,
      y: 0,
    };

    protected moveSegment: number = 500

    protected direction: 'forward' | 'back' = 'forward'

    startPosition: number = 0

    constructor(props: TMovableGameObjectProps) {
      super({
        size: {
          width: ENEMY.width,
          height: ENEMY.height,
        },
        sprites: [
          {
            resource: new ImageResource(enemySprite),
            frames: 29,
          },
        ],
        ...props,
      });
      this.startPosition = props.position.x;
    }

    move = () => {
      if (this.direction === 'forward') {
        if ((this.startPosition + this.moveSegment === this.x)) {
          this.direction = 'back';
        }
        this.incrementX(2);
      }
      if (this.direction === 'back') {
        if ((this.startPosition === this.x)) {
          this.direction = 'forward';
        }
        this.decrementX(2);
      }
    };
}
