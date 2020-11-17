import { GameMap } from '../../core/models/GameMap';
import { Ground } from '../gameObjects/Ground';
import { Wizard } from '../gameObjects/Wizard';

export class TestMap extends GameMap {
  constructor(context: CanvasRenderingContext2D) {
    super(context);

    this.mapObjects = [
      new Wizard({
        context,
        position: {
          x: 0,
          y: window.innerHeight - 512 / 1.355,
        },
      }),
      new Ground({
        context,
        position: {
          x: 0,
          y: window.innerHeight,
        },
      }),
      new Ground({
        context,
        position: {
          x: 750,
          y: window.innerHeight,
        },
      }),
      new Ground({
        context,
        position: {
          x: 1500,
          y: window.innerHeight,
        },
      }),
    ];

    this.loadResources();
  }
}
