import {astar} from '../utils/pathfinding.js';
import PlayerBase from '../entities/terrain/playerBase.js';
import EnemyBase from '../entities/terrain/enemyBase.js';
import Obstacle from '../entities/terrain/obstacle.js';

export default class MapSystem {
    constructor(width=20, height=15, cellSize=32) {
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.grid = Array.from({length: height}, () => Array(width).fill(null));
        this.terrain = [];
        this.playerBase = new PlayerBase(Math.floor(width/2), Math.floor(height/2));
        this.terrain.push(this.playerBase);
    }

    update() {}

    draw(ctx) {
        ctx.strokeStyle = '#222';
        for (let i=0;i<=this.width;i++) {
            ctx.beginPath();
            ctx.moveTo(i*this.cellSize,0);
            ctx.lineTo(i*this.cellSize,this.height*this.cellSize);
            ctx.stroke();
        }
        for (let j=0;j<=this.height;j++) {
            ctx.beginPath();
            ctx.moveTo(0,j*this.cellSize);
            ctx.lineTo(this.width*this.cellSize,j*this.cellSize);
            ctx.stroke();
        }
    }

    drawTerrain(ctx) {
        for (const t of this.terrain) t.draw(ctx, this.cellSize);
    }

    findPath(start, goal) {
        return astar(start, goal, this.width, this.height, (x,y)=>!this.grid[y][x]);
    }
}
