import { GameObject } from './GameObject';

export type MapObjects = GameObject[];

// Супер-класс карты
export class GameMap {
  // 2d контекст, который передается каждому объекту, содержащемуся в карте
  context: CanvasRenderingContext2D;

  // объекты, которые необходимо отрисовать на карте, у каждого объекта
  // свои координаты и размеры
  mapObjects: MapObjects = [];

  // Индикатор загрузки ресурсов. Пока
  // этот флаг false, игровой цикл ничего не будет рисовать
  resourcesLoaded = false;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  // Пробегается по всему массиву объектов и ждет пока все ресурсы
  // всех объектов загрузятся
  protected loadResources = async () => {
    const resourcesQueue: Promise<void>[] = [];
    try {
      this.mapObjects.forEach((mapObject) => {
        mapObject
          .getResources()
          .forEach((resource) => resourcesQueue.push(resource.load()));
      });
      await Promise.all(resourcesQueue);
      this.resourcesLoaded = true;
    } catch (error) {
      this.resourcesLoaded = false;
    }
  };

  public getObjects = () => this.mapObjects;

  // Пробегается по всему массиву объектов и вызывает у каждого метод render
  // таким образом каждый объект будет отрисован
  // этот метод вызывается в главном игровом цикле, соответственно около 60 раз в секунду
  public render() {
    if (!this.resourcesLoaded) {
      return;
    }
    this.mapObjects.forEach((item) => item.render());
  }
}
