import { GameObject, TGameObjectProps } from '../../core/models/GameObject';
import CoinSprite from '../../../assets/img/sprites/coin.png';
import { ImageResource } from '../../core/ImageResource';
import { COIN } from '../../consts/size';

export class Coin extends GameObject {
  constructor(props: TGameObjectProps) {
    super({
      size: {
        width: COIN.width,
        height: COIN.height,
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
