import { LevelBuilder } from '../entities/maps/levelBulder';
import { GameMap } from './models/GameMap';
import { CanvasService } from './services/CanvasService';
import { GameObject } from './models/GameObject';
import { WIZARD } from '../consts/size';
import { AudioResource } from './AudioResource';
import { Level1 } from '../entities/maps/level1Array';
import { Level2 } from '../entities/maps/level2Array';
import { LeaderboardApi } from '../../api/leaderboard.api';

import AudioBg from '../../assets/audio/background.wav';

const api = new LeaderboardApi();

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

  context: CanvasRenderingContext2D;

  currenLevel: number;

  // игровые параметры
  // конструктор принимает canvas и объект с параметрами Params
  constructor(canvas: HTMLCanvasElement) {
    const { context } = CanvasService.initInstance(canvas);
    this.context = context;
    this.currenLevel = 1;
    this.currentMap = new LevelBuilder(context, Level1);
    const audio = new AudioResource(AudioBg).getAudio();
    audio.loop = true;
    audio.play();
  }

  // показывает канвас и запускает игровой цикл
  start = () => {
    CanvasService.getInstance().showCanvas();
    this.gameLoop();
  };

  showPoints = (player:GameObject) => {
    const cs = CanvasService.getInstance();
    if (player.points) {
      cs.context.fillStyle = '#f93b3b';
      cs.context.font = 'normal 120px Arial';
      cs.context.fillText(player.points.toString(), 20, 220);
    }
  }

  showText(text: string) {
    const cs = CanvasService.getInstance();
    cs.context.fillStyle = '#f93b3b';
    cs.context.font = 'normal 120px Arial';
    const textWidth = cs.context.measureText(text).width;
    cs.context.fillText(text, (cs.size.width / 2) - (textWidth / 2), (cs.size.height / 2));
  }

  levelFinish = (player:GameObject) => {
    const cs = CanvasService.getInstance();
    cs.context.restore();
    const levelCount = this.currentMap.countLevel;
    this.currenLevel += 1;
    if (this.currenLevel <= levelCount) {
      this.showText('Ура! Уровень пройден');
      const changeLevel = new Promise((resolve) => {
        setTimeout(() => {
          this.currentMap = new LevelBuilder(this.context, Level2);
          resolve(true);
        }, 1000);
      });
      changeLevel.then(() => {
        this.start();
      });
    } else {
      this.gameFinish(player);
    }
  }

  gameOver = () => {
    this.showText('Вы проиграли!');
    setTimeout(() => {
      const locationObj = document.location;
      locationObj.href = `${locationObj.origin + locationObj.pathname}?status=gameOver`;
    }, 1000);
  }

  gameFinish = (player:GameObject) => {
    this.showText('Ура! Вы прошли игру');
    const leaderboad = new Promise((resolve) => {
      setTimeout(() => {
        api.addToLeaderboard({
          name: 'Hello',
          point: player.points.toString(),
        });
        resolve(true);
      }, 500);
    });
    leaderboad.then(() => {
      const locationObj = document.location;
      locationObj.href = `${locationObj.origin + locationObj.pathname}?status=gameFinish&points=${player.points.toString()}`;
    });
  }

  // игровой цикл
  private gameLoop = () => {
    const cs = CanvasService.getInstance();
    cs.context.save();
    const wizard:any = this.currentMap.getHero();
    const cameraX = (cs.size.width / 2 - WIZARD.horizontal_indent) - (wizard.getX());
    this.showPoints(wizard);
    cs.redrawContext();
    cs.context.translate(cameraX, 0);
    this.currentMap.render();
    if (wizard.gameStatus.levelFinish) {
      this.levelFinish(wizard);
      return false;
    }
    if (wizard.gameStatus.gameOver) {
      this.gameOver();
      return false;
    }
    cs.context.restore();
    window.requestAnimationFrame(this.gameLoop); // встроенная функция
  };
}
