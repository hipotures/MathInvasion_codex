export default class Obstacle {
    constructor(i,j){this.i=i;this.j=j;}
    draw(ctx,size){
        ctx.fillStyle='gray';
        ctx.fillRect(this.i*size,this.j*size,size,size);
    }
}
