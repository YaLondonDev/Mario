import { GameMap } from '../../core/models/GameMap';
import { Ground } from '../gameObjects/Ground';
import { Wizard } from '../gameObjects/Wizard';
import { Coin } from '../gameObjects/Coin';
import { Finish } from '../gameObjects/Finish';
import { Enemy } from '../gameObjects/Enemy';
import { Map } from './level1Array';

export class LevelBuilder extends GameMap {
  countLevel: number;

  MapArray: Map;

  constructor(context: CanvasRenderingContext2D, level: Map) {
    super(context);
    this.mapObjects = [];
    this.countLevel = 2;
    this.MapArray = level;

    this.levelBuild(context);
    this.loadResources();
  }

  levelBuild = (context: CanvasRenderingContext2D) => {
    this.mapObjects.push(
      new Wizard({
        map: this,
        context,
        position: this.MapArray.player.position,
      }),
    );

    this.mapObjects.push(
      new Finish({
        map: this,
        context,
        position: this.MapArray.finish.position,
      }),
    );

    this.MapArray.enemy.forEach((item) => {
      this.mapObjects.push(
        new Enemy({ map: this, context, position: item.position }),
      );
    });

    this.MapArray.obstacles.forEach((item) => {
      this.mapObjects.push(
        new Ground({
          map: this,
          context,
          position: item.position,
        }),
      );
    });

    this.MapArray.coins.forEach((item) => {
      this.mapObjects.push(
        new Coin({ map: this, context, position: item.position }),
      );
    });
  }
}
