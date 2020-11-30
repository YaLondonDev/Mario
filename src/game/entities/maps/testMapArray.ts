import { HEIGHT, PLATFORM_WIDTH } from '../../consts/size';

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
        y: HEIGHT + 59,
      },
      size: {
        width: PLATFORM_WIDTH,
        height: 180,
      },
    },
    {
      name: 'Ground',
      position: {
        x: PLATFORM_WIDTH + 300,
        y: HEIGHT - 150,
      },
      size: {
        width: PLATFORM_WIDTH,
        height: 180,
      },
    },
  ],
  coins: [
    {
      name: 'Coin',
      position: {
        x: PLATFORM_WIDTH,
        y: HEIGHT - 220,
      },
      size: {
        width: 512,
        height: 512,
      },
    },
    {
      name: 'Coin',
      position: {
        x: PLATFORM_WIDTH + 400,
        y: HEIGHT - 280,
      },
      size: {
        width: 512,
        height: 512,
      },
    },
  ],
};
