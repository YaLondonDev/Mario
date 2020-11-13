interface Wizard {
    size: {
        width: number,
        height: number,
    }
    position: {
        posX: number,
        posY: number,
    }
    moveSpeed: number,
    xSpeed: number,
    ySpeed: number,
    sprites: [
        {
            resource: string,
            frames: number,
        },
    ],
    score: number
}
 
interface Platform {
    position: {
        posX: number,
        posY: number,
    },
    size: {
        width: number,
        height: number,
    },
    sprites: [
        {
            resource: string,
            frames: number,
        },
    ],
}
 
interface Coin {
    position: {
        posX: number,
        posY: number,
    },
    size: {
        width: number,
        height: number,
    },
    sprites: [
        {
            resource: string,
            frames: number,
        },
    ],
}
 
interface Level {
    position: {
        posX: number,
        posY: number,
    },
    size: {
        width: number,
        height: number,
    },
    currentLevel: number,
    levelObjects: [string]
}
