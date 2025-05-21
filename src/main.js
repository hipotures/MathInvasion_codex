import CanvasSystem from './systems/canvas.js';
import CameraSystem from './systems/camera.js';
import InputSystem from './systems/input.js';
import MapSystem from './systems/map.js';
import CashManager from './systems/cashManager.js';
import EnemyManager from './systems/enemiesManager.js';
import MunitionsManager from './systems/munitionsManager.js';
import WaveManager from './systems/waveManager.js';
import TowerPlacement from './systems/towerPlacement.js';
import UIManager from './systems/uiManager.js';
import URLParams from './systems/urlParams.js';

const TARGET_FPS = 60;
const UPDATE_INTERVAL = 1000 / TARGET_FPS;

class Game {
    constructor() {
        this.canvas = new CanvasSystem(document.getElementById('gameCanvas'));
        this.camera = new CameraSystem(this.canvas);
        this.input = new InputSystem(this.canvas, this.camera);
        this.map = new MapSystem();
        this.cash = new CashManager();
        this.enemies = new EnemyManager(this.map);
        this.munitions = new MunitionsManager();
        this.waves = new WaveManager(this.enemies, this.map);
        this.towerPlacement = new TowerPlacement(this.map, this.cash);
        this.ui = new UIManager(this.cash, this.waves, this.towerPlacement);
        this.url = new URLParams();

        this.running = false;
        this.lastUpdate = 0;
        this.updateLoop = this.updateLoop.bind(this);
        this.drawLoop = this.drawLoop.bind(this);
    }

    start() {
        this.running = true;
        this.lastUpdate = performance.now();
        this.updateTimer = setInterval(this.updateLoop, UPDATE_INTERVAL);
        requestAnimationFrame(this.drawLoop);
    }

    stop() {
        this.running = false;
        clearInterval(this.updateTimer);
    }

    updateLoop() {
        const now = performance.now();
        const dt = now - this.lastUpdate;
        this.lastUpdate = now;
        this.camera.update(dt);
        this.input.update(dt);
        this.map.update(dt);
        this.waves.update(dt);
        this.enemies.update(dt);
        this.munitions.update(dt);
        this.towerPlacement.update(dt);
        this.ui.update(dt);
    }

    drawLoop() {
        if (!this.running) return;
        this.canvas.clear();
        this.canvas.push();
        this.camera.applyTransform(this.canvas.ctx);
        this.map.draw(this.canvas.ctx);
        this.munitions.draw(this.canvas.ctx);
        this.enemies.draw(this.canvas.ctx);
        this.map.drawTerrain(this.canvas.ctx);
        this.towerPlacement.draw(this.canvas.ctx);
        this.canvas.pop();
        requestAnimationFrame(this.drawLoop);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    game.start();
});
