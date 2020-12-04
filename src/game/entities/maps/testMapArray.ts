import { CANVAS, PLATFORM } from '../../consts/size';

export const MapArray:any = {
  player: {
    name: 'Wizard',
    position: {
      x: -200,
      y: 1444,
    },
  },
  obstacles: [
    {
      name: 'Ground',
      position: {
        x: 200,
        y: CANVAS.height + 59,
      },
      size: {
        width: PLATFORM.width,
        height: PLATFORM.height,
      },
    },
    {
      name: 'Ground',
      position: {
        x: PLATFORM.width + 300,
        y: CANVAS.height - 200,
      },
      size: {
        width: PLATFORM.width,
        height: PLATFORM.height,
      },
    },
  ],
  coins: [
    {
      name: 'Coin',
      position: {
        x: PLATFORM.width,
        y: CANVAS.height - 220,
      },
      size: {
        width: 512,
        height: 512,
      },
    },
    {
      name: 'Coin',
      position: {
        x: PLATFORM.width + 400,
        y: CANVAS.height - 280,
      },
      size: {
        width: 512,
        height: 512,
      },
    },
  ],
};
