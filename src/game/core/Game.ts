import { TestMap } from '../entities/maps/TestMap';
import { GameMap } from './models/GameMap';

export type Params = {
  width: number;
  height: number;
  scale?: number;
};

/**
 * Точка входа в игру. Игра начинается с создания инстанса этого класса
 */
export class Game {
  // html нода canvas
  private canvas: HTMLCanvasElement;

  // объект контекста
  private context: CanvasRenderingContext2D;

  // объект текущей карты
  currentMap: GameMap;

  // игровые параметры
  private params: Params = {
    width: 100,
    height: 100,
    scale: 1,
  };

  // конструктор принимает canvas и объект с параметрами Params
  constructor(canvas: HTMLCanvasElement, params?: Params) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Game initialization failed');
    }
    this.context = context;
    if (params) {
      this.params = { ...this.params, ...params };
    }
    this.initCanvas();

    this.currentMap = new TestMap(this.context);
  }

  // В этом методе устанавливаются значения высоты, ширины
  // и прочих параметров, которые переданы извне канвасу
  private initCanvas = () => {
    // this.params.width = window.innerWidth;
    // this.params.height = window.innerHeight;

    this.canvas.width = this.params.width;
    this.canvas.height = this.params.height;

    this.canvas.style.position = 'absolute';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = `${this.params.width}px`;
    this.canvas.style.height = `${this.params.height}px`;
    this.canvas.style.border = `1px solid red`;
    this.context.scale(this.params.scale, this.params.scale); // масштабирование
    this.hideCanvas();
  };

  // скрывает канвас, т.к. с самого начала его не нужно показывать
  private hideCanvas = () => {
    this.canvas.style.display = 'none';
  };

  // показывает канвас
  private showCanvas = () => {
    this.canvas.style.display = 'block';
  };

  // показывает канвас и запускает игровой цикл
  start = () => {
    this.showCanvas();
    this.gameLoop();
  };

  // игровой цикл
  private gameLoop = () => {
    const {
      params: { width, height, scale },
    } = this;
    // для того, чтобы на холсте не оставались нарисованные объекты со старыми координатами
    // необходимо очистить весь холст
    this.context.clearRect(
      0,
      0,
      width * (1 + (1 - scale)) * 2,
      height * (1 + (1 - scale)) * 2,
    );
    this.currentMap.render(); // Просим карту отрисовать все её объекты
    window.requestAnimationFrame(this.gameLoop); // встроенная функция,
    // которая будет вызывать gameLoop 60 раз в 1 секунду
  };
}
