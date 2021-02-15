import { PLATFORM } from '../../consts/size';

type Map = {
  obstacles: gameObject[],
  enemy: gameObject[],
  coins: gameObject[],
  finish: gameObject,
  player: gameObject
}

type gameObject = {
  name: string,
  position: {
    x: number,
    y: number
  }
}

export const Level2: Map = {
  player: {
    name: 'Wizard',
    position: {
      x: 500,
      y: 1444,
    },
  },
  obstacles: [
    {
      name: 'Ground',
      position: {
        x: 0,
        y: 500,
      },
    },
    {
      name: 'Ground',
      position: {
        x: 0 - PLATFORM.width,
        y: 139,
      },
    },
    {
      name: 'Ground',
      position: {
        x: 0 + PLATFORM.width,
        y: 139,
      },
    },
    {
      name: 'Ground',
      position: {
        x: 90 + 2 * PLATFORM.width,
        y: 360,
      },
    },
    {
      name: 'Ground',
      position: {
        x: 260 + 3 * PLATFORM.width,
        y: 139,
      },
    },
    {
      name: 'Ground',
      position: {
        x: 560 + 4 * PLATFORM.width,
        y: 360,
      },
    },
    {
      name: 'Ground',
      position: {
        x: 860 + 5 * PLATFORM.width,
        y: 139,
      },
    },
    {
      name: 'Ground',
      position: {
        x: 1160 + 6 * PLATFORM.width,
        y: 360,
      },
    },
    {
      name: 'Ground',
      position: {
        x: 1360 + 7 * PLATFORM.width,
        y: 139,
      },
    },
    {
      name: 'Ground',
      position: {
        x: 1660 + 8 * PLATFORM.width,
        y: 360,
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
    },
    {
      name: 'Coin',
      position: {
        x: 1160 + 6 * PLATFORM.width + 300,
        y: 320 + 150,
      },
    },
    {
      name: 'Coin',
      position: {
        x: 560 + 4 * PLATFORM.width + 100,
        y: 320 + 150,
      },
    },
    {
      name: 'Coin',
      position: {
        x: 1660 + 8 * PLATFORM.width + 222,
        y: 320 + 150,
      },
    },
  ],
  finish: {
    name: 'Wizard',
    position: {
      x: 1500 + 9 * PLATFORM.width,
      y: 360 + 110,
    },
  },
  enemy: [
    {
      name: 'Enemy',
      position: {
        x: 1160 + 6 * PLATFORM.width,
        y: 360 + 150,
      },
    },
    {
      name: 'Enemy',
      position: {
        x: 90 + 2 * PLATFORM.width,
        y: 360 + 150,
      },
    },
    {
      name: 'Enemy',
      position: {
        x: 1360 + 7 * PLATFORM.width,
        y: 139 + 150,
      },
    },
    {
      name: 'Enemy',
      position: {
        x: 560 + 4 * PLATFORM.width,
        y: 360 + 150,
      },
    },
  ],
};
