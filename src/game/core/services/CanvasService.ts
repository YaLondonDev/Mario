import { GameContainer } from '../GameContainer';
import { TSize } from '../models/GameObject';
import bg from '../../../assets/img/sprites/background/bg.png';

export type TResizeListener = (size?: TSize) => void;

export class CanvasService {
  private static instance: CanvasService;

  private _canvas: HTMLCanvasElement;

  private _context: CanvasRenderingContext2D;

  private _offset: {
    x: 0;
    y: 0;
  };

  private _size = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  private _scale = 0.5;

  private resizeListeners: TResizeListener[] = [];

  private constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100vw';
    this.canvas.style.height = '100vh';
    this.canvas.style.display = 'block';
    this.canvas.style.background = `url(${bg}) no-repeat`;
    if (GameContainer.config.isDebug) {
      this.canvas.style.border = `1px solid red`;
    }

    this.context = canvas.getContext('2d');
    this.updateCanvasSize();
    this.hideCanvas();
    this.initEvents();
  }

  public static initInstance = (canvas: HTMLCanvasElement) => {
    CanvasService.instance = new CanvasService(canvas);
    return CanvasService.getInstance();
  };

  public static getInstance = () => {
    if (!CanvasService.instance) {
      throw new Error(
        'CanvasService instance is undefined. Please, use initInstance() before',
      );
    }

    return CanvasService.instance;
  };

  set canvas(canvas: HTMLCanvasElement) {
    this._canvas = canvas;
  }

  get canvas() {
    return this._canvas;
  }

  set size(props: { width: number; height: number }) {
    this._size = { ...props };
  }

  get size() {
    const { width, height } = this._size;

    return {
      width: width + width * 1 - this._scale,
      height: height + height * 1 - this._scale,
    };
  }

  set context(context: CanvasRenderingContext2D) {
    this._context = context;
  }

  get context() {
    return this._context;
  }

  private initEvents = () => {
    window.addEventListener('resize', this.updateCanvasSize);
  };

  public handleResize = (listener: TResizeListener) => {
    this.resizeListeners.push(listener);
  };

  private updateCanvasSize = () => {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.size = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.scaleContext();
    this.resizeListeners.forEach((listener) => listener(this.size));
  };

  private scaleContext = () => {
    this._context.scale(this._scale, this._scale);
  };

  public scaled = (value: number) => value + value * (1 - this._scale);

  public redrawContext = () => {
    this._context.clearRect(0, 0, this.size.width, this.size.height);
  };

  public hideCanvas = () => {
    this._canvas.style.display = 'none';
  };

  public showCanvas = () => {
    this._canvas.style.display = 'block';
  };

  public y = (y: number) => this.size.height - y;

  public x = (x: number) => x;

  public invertedY = (y: number) => this.size.height - this.y(y);
}
