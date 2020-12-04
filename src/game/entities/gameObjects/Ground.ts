import { GameObject, TGameObjectProps } from '../../core/models/GameObject';
import GroundSprite from '../../../assets/img/sprites/ground.png';
import { ImageResource } from '../../core/ImageResource';
import { PLATFORM } from '../../consts/size';

export class Ground extends GameObject {
  constructor(props: TGameObjectProps) {
    super({
      size: {
        width: PLATFORM.width,
        height: PLATFORM.height,
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
