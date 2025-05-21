import {drawCircle} from '../../utils/shapes.js';

export default class BasicEnemy {
  constructor(x,y){this.x=x;this.y=y;this.r=10;this.speed=50;this.hp=10;this.dead=false;this.path=[{x:10,y:10}];}
  update(dt,map){
    // move along path simple placeholder
    this.x+=0.05*dt; this.y+=0.02*dt;
  }
  draw(ctx){drawCircle(ctx,this.x,this.y,this.r,'green');}
}
