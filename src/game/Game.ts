export type TOptions = {
  width: number;
  height: number;
};

export class Game {
  private canvas: HTMLCanvasElement;

  private context: CanvasRenderingContext2D;

  private options: TOptions = { width: 100, height: 100 };

  constructor(canvas: HTMLCanvasElement, options?: TOptions) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error(`Game can't initialize. Context is not defined`);
    }

    this.context = context;

    if (options) {
      this.options = { ...this.options, ...options };
    }

    this.configureCanvas();
  }

  private configureCanvas = () => {
    const { options, canvas } = this;
    canvas.width = options.width;
    canvas.height = options.height;

    canvas.style.width = `${options.width}px`;
    canvas.style.height = `${options.height}px`;
  };

  public start = () => {
    this.gameLoop();
  };

  private gameLoop = () => {
    this.context.clearRect(0, 0, this.options.width, this.options.height);
    this.context.fillStyle = '#ff0000';
    this.context.fillRect(0, 0, 100, 100);

    requestAnimationFrame(this.gameLoop);
  };
}
