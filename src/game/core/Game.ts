import { TestMap } from '../entities/maps/TestMap';
import { GameMap } from './models/GameMap';
import { CanvasService } from './services/CanvasService';
import { GameObject } from './models/GameObject';

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

  gameOver = () => {
    const locationObj = document.location;
    locationObj.href = `${locationObj.origin + locationObj.pathname}?status=gameOver`;
  }

  showPoints = (player:GameObject) => {
    const cs = CanvasService.getInstance();
    if (player.points) {
      cs.context.fillStyle = '#f93b3b';
      cs.context.font = 'normal 120px Arial';
      cs.context.fillText(player.points.toString(), 20, 220);
    }
  }

  gameFinish = (player:GameObject) => {
    const locationObj = document.location;
    locationObj.href = `${locationObj.origin + locationObj.pathname}?status=gameFinish&points=${player.points.toString()}`;
  }

  // игровой цикл
  private gameLoop = () => {
    const cs = CanvasService.getInstance();
    cs.context.save();
    const wizard:any = this.currentMap.getHero();
    const cameraX = (cs.size.width / 2 - 212) - (wizard.getX());
    cs.redrawContext();
    this.showPoints(wizard);
    cs.context.translate(cameraX, 0);
    this.currentMap.render();
    if (wizard.gameStatus.gameFinish) {
      this.gameFinish(wizard);
    }
    if (wizard.gameStatus.gameOver) {
      this.gameOver();
    }
    cs.context.restore();
    window.requestAnimationFrame(this.gameLoop); // встроенная функция
  };
}
