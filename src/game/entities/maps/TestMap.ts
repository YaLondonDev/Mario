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
          x: -200,
          y: 0,
        },
      }),
      new Ground({
        context,
        position: {
          x: 0,
          y: 880,
        },
      }),
      new Ground({
        context,
        position: {
          x: 750,
          y: 880,
        },
      }),
    ];

    this.loadResources();
  }
}
