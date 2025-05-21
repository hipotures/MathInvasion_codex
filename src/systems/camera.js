export default class CameraSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = 0;
        this.y = 0;
        this.scale = 1;
    }

    update() {
        // placeholder for camera controls
    }

    applyTransform(ctx) {
        ctx.translate(-this.x, -this.y);
        ctx.scale(this.scale, this.scale);
    }
}
