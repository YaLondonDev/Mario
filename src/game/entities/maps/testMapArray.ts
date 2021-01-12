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
        x: 0,
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
        x: 0 - PLATFORM.width,
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
        x: 0 + PLATFORM.width,
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
        x: 90 + 2 * PLATFORM.width,
        y: 360,
      },
      size: {
        width: PLATFORM.width,
        height: PLATFORM.height,
      },
    },
    {
      name: 'Ground',
      position: {
        x: 260 + 3 * PLATFORM.width,
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
        x: 560 + 4 * PLATFORM.width,
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
        x: 860 + 5 * PLATFORM.width,
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
        x: 1160 + 6 * PLATFORM.width,
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
        x: 1360 + 7 * PLATFORM.width,
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
        x: 1660 + 8 * PLATFORM.width,
        y: 120,
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
        x: PLATFORM.width + 400,
        y: 280,
      },
      size: {
        width: 512,
        height: 512,
      },
    },
    {
      name: 'Coin',
      position: {
        x: 1160 + 6 * PLATFORM.width + 300,
        y: 720 + 150,
      },
      size: {
        width: 512,
        height: 512,
      },
    },
    {
      name: 'Coin',
      position: {
        x: 560 + 4 * PLATFORM.width + 100,
        y: 720 + 150,
      },
      size: {
        width: 512,
        height: 512,
      },
    },
    {
      name: 'Coin',
      position: {
        x: 1660 + 8 * PLATFORM.width + 222,
        y: 120 + 150,
      },
      size: {
        width: 512,
        height: 512,
      },
    },
  ],
  finish: {
    name: 'Wizard',
    position: {
      x: 1500 + 9 * PLATFORM.width,
      y: 220,
    },
  },
  enemy: [
    {
      name: 'Enemy',
      position: {
        x: 1160 + 6 * PLATFORM.width,
        y: 720 + 150,
      },
      size: {
        width: 255,
        height: 205,
      },
    },
    {
      name: 'Enemy',
      position: {
        x: 90 + 2 * PLATFORM.width,
        y: 360 + 150,
      },
      size: {
        width: 255,
        height: 205,
      },
    },
    {
      name: 'Enemy',
      position: {
        x: 1360 + 7 * PLATFORM.width,
        y: 520 + 150,
      },
      size: {
        width: 255,
        height: 205,
      },
    },
    {
      name: 'Enemy',
      position: {
        x: 560 + 4 * PLATFORM.width,
        y: 860,
      },
      size: {
        width: 255,
        height: 205,
      },
    },
  ],
};
