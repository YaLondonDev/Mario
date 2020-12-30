import { PLATFORM } from '../../consts/size';

export const MapArray: any = {
  player: {
    name: 'Wizard',
    position: {
      x: 0,
      y: 1444,
    },
  },
  obstacles: [
    {
      name: 'Ground',
      position: {
        x: 800,
        y: 139,
      },
      size: {
        width: PLATFORM.width,
        height: PLATFORM.height,
      },
    },
    {
      name: 'Ground',
      position: {
        x: 800,
        y: 759,
      },
      size: {
        width: PLATFORM.width,
        height: PLATFORM.height,
      },
    },
    {
      name: 'Ground',
      position: {
        x: 900 + PLATFORM.width,
        y: 259,
      },
      size: {
        width: PLATFORM.width,
        height: PLATFORM.height,
      },
    },
    {
      name: 'Ground',
      position: {
        x: 900 + PLATFORM.width * 1.3,
        y: 520,
      },
      size: {
        width: PLATFORM.width,
        height: PLATFORM.height,
      },
    },
    {
      name: 'Ground',
      position: {
        x: 900 + PLATFORM.width * 1.5,
        y: 720,
      },
      size: {
        width: PLATFORM.width,
        height: PLATFORM.height,
      },
    },
    {
      name: 'Ground',
      position: {
        x: 900 + PLATFORM.width * 1.6,
        y: 920,
      },
      size: {
        width: PLATFORM.width,
        height: PLATFORM.height,
      },
    },
    {
      name: 'Ground',
      position: {
        x: 900 + PLATFORM.width / 3,
        y: 1120,
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
        y: 220,
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
        y: 280,
      },
      size: {
        width: 512,
        height: 512,
      },
    },
  ],
};
