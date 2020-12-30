import { TestMap } from '../entities/maps/TestMap';
import { GameMap } from './models/GameMap';
import { CanvasService } from './services/CanvasService';

export type Params = {
  width: number;
  height: number;
  scale?: number;
};

/**
 * Точка входа в игру. Игра начинается с создания инстанса этого класса
 */
export class Game {
  // объект текущей карты
  currentMap: GameMap;

  // игровые параметры
  // конструктор принимает canvas и объект с параметрами Params
  constructor(canvas: HTMLCanvasElement) {
    const { context } = CanvasService.initInstance(canvas);
    this.currentMap = new TestMap(context);
  }

  // показывает канвас и запускает игровой цикл
  start = () => {
    CanvasService.getInstance().showCanvas();
    this.gameLoop();
  };

  // игровой цикл
  private gameLoop = () => {
    const cs = CanvasService.getInstance();
    cs.redrawContext();
    cs.context.fillStyle = 'red';
    cs.context.fillRect(0, cs.size.height - 10, cs.size.width - 10, 3);
    this.currentMap.render(); // Просим карту отрисовать все её объекты
    window.requestAnimationFrame(this.gameLoop); // встроенная функция,
    // которая будет вызывать gameLoop 60 раз в 1 секунду
  };
}
