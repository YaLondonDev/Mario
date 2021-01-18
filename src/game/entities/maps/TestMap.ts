import { GameMap } from '../../core/models/GameMap';
import { Ground } from '../gameObjects/Ground';
import { Wizard } from '../gameObjects/Wizard';
import { Coin } from '../gameObjects/Coin';
import { Finish } from '../gameObjects/Finish';
import { Enemy } from '../gameObjects/Enemy';
import { MapArray } from './testMapArray';

export class TestMap extends GameMap {
  constructor(context: CanvasRenderingContext2D) {
    super(context);

    this.mapObjects = [];
    this.mapObjects.push(
      new Wizard({
        map: this,
        context,
        position: MapArray.player.position,
      }),
    );

    this.mapObjects.push(
      new Finish({
        map: this,
        context,
        position: MapArray.finish.position,
      }),
    );

    MapArray.enemy.forEach((item) => {
      this.mapObjects.push(
        new Enemy({ map: this, context, position: item.position }),
      );
    });

    MapArray.obstacles.forEach((item) => {
      this.mapObjects.push(
        new Ground({
          map: this,
          context,
          position: item.position,
        }),
      );
    });

    MapArray.coins.forEach((item) => {
      this.mapObjects.push(
        new Coin({ map: this, context, position: item.position }),
      );
    });

    this.loadResources();
  }
}
