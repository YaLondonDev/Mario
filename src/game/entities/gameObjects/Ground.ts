import { GameObject, TGameObjectProps } from '../../core/models/GameObject';
import GroundSprite from '../../../assets/img/sprites/ground.png';
import { ImageResource } from '../../core/ImageResource';

export class Ground extends GameObject {
  constructor(props: TGameObjectProps) {
    super({
      size: {
        width: 1200,
        height: 276,
      },
      sprites: [
        {
          resource: new ImageResource(GroundSprite),
          frames: 1,
        },
      ],
      ...props,
    });
  }
}
