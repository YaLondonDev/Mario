import { GameObject, TGameObjectProps } from '../../core/models/GameObject';
import FinishSprite from '../../../assets/img/sprites/finish.png';
import { ImageResource } from '../../core/ImageResource';
import { FINISH } from '../../consts/size';

export class Finish extends GameObject {
  constructor(props: TGameObjectProps) {
    super({
      size: {
        width: FINISH.width,
        height: FINISH.height,
      },
      sprites: [
        {
          resource: new ImageResource(FinishSprite),
          frames: 1,
        },
      ],
      ...props,
    });
  }
}
