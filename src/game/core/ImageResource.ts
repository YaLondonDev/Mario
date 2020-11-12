// представляет собой обертку над изображением
// которая занимается вопросом загрузки этого изображения
export class ImageResource {
  // путь к изображению
  private path: string;

  // объект изображения
  private image: HTMLImageElement = new Image();

  constructor(path: string) {
    this.path = path;
  }

  // геттер для изображения
  getImage = () => this.image;

  // этот метод возвращает промис, который разрешается либо окончанием загрузки
  // изображения, либо выбросом ошибки, в случае неудачи
  load = (): Promise<void> => {
    this.image.src = this.path;
    return new Promise((resolve, reject) => {
      this.image.onload = () => {
        resolve();
      };
      this.image.onerror = () => {
        reject();
      };
    });
  };
}
