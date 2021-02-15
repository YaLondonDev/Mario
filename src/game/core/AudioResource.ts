// представляет собой обертку над audio
// которая занимается вопросом загрузки этого звука
export class AudioResource {
    // путь к изображению
    private path: string;

    // объект звука
    private Audio: HTMLAudioElement = new Audio();

    constructor(path: string) {
      this.path = path;
    }

    // геттер для звука
    getAudio = () => {
      this.Audio.src = this.path;
      return this.Audio;
    }

    // этот метод возвращает промис, который разрешается либо окончанием загрузки
    // звука, либо выбросом ошибки, в случае неудачи
    load = (): Promise<void> => {
      this.Audio.src = this.path;
      return new Promise((resolve, reject) => {
        this.Audio.onload = () => {
          resolve();
        };
        this.Audio.onerror = () => {
          reject();
        };
      });
    };

    play = () => {
      this.Audio.play();
    }
}
