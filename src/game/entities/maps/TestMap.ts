import { GameMap } from '../../core/models/GameMap';
import { Ground } from '../gameObjects/Ground';
import { Wizard } from '../gameObjects/Wizard';
import { HEIGHT, WIZARD_SPRITE_INDENT, PLATFORM_SPRITE_INDENT, PLATFORM_WIDTH } from '../../consts/size';

export class TestMap extends GameMap {
  constructor(context: CanvasRenderingContext2D) {
    super(context);

    this.mapObjects = [
      new Wizard({
        context,
        position: {
          x: WIZARD_SPRITE_INDENT,
          y: 0,
        },
      }),
      new Ground({
        context,
        position: {
          x: 0,
          y: HEIGHT + PLATFORM_SPRITE_INDENT,
        },
      }),
      new Ground({
        context,
        position: {
          x: PLATFORM_WIDTH,
          y: HEIGHT + PLATFORM_SPRITE_INDENT,
        },
      }),
    ];

    this.loadResources();
  }
}
