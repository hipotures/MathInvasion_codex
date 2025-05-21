export default class CanvasSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        window.addEventListener('resize', () => this.resize());
        this.resize();
        this.stack = [];
    }

    resize() {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }

    clear() {
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    push() {
        this.ctx.save();
    }

    pop() {
        this.ctx.restore();
    }
}
