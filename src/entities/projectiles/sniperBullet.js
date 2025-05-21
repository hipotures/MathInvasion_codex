import {drawCircle} from '../../utils/shapes.js';

export default class SniperBullet {
  constructor(x,y,target){this.x=x;this.y=y;this.target=target;this.dead=false;this.life=50;}
  update(dt){this.life-=dt;if(this.life<=0){if(this.target&&!this.target.dead){this.target.hp-=5;}this.dead=true;}}
  draw(ctx){drawCircle(ctx,this.x,this.y,2,'white');}
}
