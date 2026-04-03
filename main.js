// Fixed tile coordinate system
const TILE_SIZE = 32;

class Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw(context) {
        context.fillStyle = '#00ff00'; // Example color
        context.fillRect(this.x * TILE_SIZE, this.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
}

class Game {
    constructor() {
        this.tiles = [];
        this.canvas = document.getElementById('gameCanvas');
        this.context = this.canvas.getContext('2d');
        this.init();
    }

    init() {
        // Initialize tiles
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                this.tiles.push(new Tile(x, y));
            }
        }
        this.loop();
    }

    loop() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.tiles.forEach(tile => tile.draw(this.context));
        requestAnimationFrame(this.loop.bind(this));
    }
}

window.onload = () => {
    new Game();
};