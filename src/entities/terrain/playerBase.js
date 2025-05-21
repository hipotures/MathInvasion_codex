export default class PlayerBase {
    constructor(i,j){
        this.i=i;this.j=j;this.hp=100;
    }
    draw(ctx, size){
        ctx.fillStyle='blue';
        ctx.fillRect(this.i*size,this.j*size,size,size);
    }
}
