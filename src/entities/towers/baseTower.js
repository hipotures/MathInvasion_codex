import {drawCircle} from '../../utils/shapes.js';

export default class BaseTower {
  constructor(i,j){
    this.i=i;this.j=j;this.size=32;this.reload=1000;this.range=64;this.cooldown=0;
  }
  update(dt, enemies, munitions) {
    if(this.cooldown>0) this.cooldown-=dt;
  }
  draw(ctx){
    ctx.fillStyle='white';
    ctx.fillRect(this.i*this.size,this.j*this.size,this.size,this.size);
  }
}
