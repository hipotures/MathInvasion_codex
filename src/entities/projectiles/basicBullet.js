import {drawCircle} from '../../utils/shapes.js';

export default class BasicBullet {
  constructor(x,y,target){this.x=x;this.y=y;this.target=target;this.speed=200;this.dead=false;}
  update(dt){if(!this.target||this.target.dead){this.dead=true;return;}const dx=this.target.x-this.x;const dy=this.target.y-this.y;const dist=Math.hypot(dx,dy);if(dist<5){this.target.hp-=1;this.dead=true;}else{this.x+=dx/dist*this.speed*dt/1000;this.y+=dy/dist*this.speed*dt/1000;}}
  draw(ctx){drawCircle(ctx,this.x,this.y,3,'yellow');}
}
