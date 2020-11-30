import { GameObject, TGameObjectProps } from '../../core/models/GameObject';
import CoinSprite from '../../../assets/img/sprites/coin.png';
import { ImageResource } from '../../core/ImageResource';

export class Coin extends GameObject {
  constructor(props: TGameObjectProps) {
    super({
      size: {
        width: 120,
        height: 111,
      },
      sprites: [
        {
          resource: new ImageResource(CoinSprite),
          frames: 18,
        },
      ],
      ...props,
    });
  }
}
