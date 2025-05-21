export default class EnemyBase {
    constructor(i,j){this.i=i;this.j=j;}
    draw(ctx,size){
        ctx.fillStyle='red';
        ctx.fillRect(this.i*size,this.j*size,size,size);
    }
}
