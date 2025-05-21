export default class Laser {
  constructor(x,y,target){this.x=x;this.y=y;this.target=target;this.dead=false;}
  update(dt){if(!this.target||this.target.dead){this.dead=true;return;}this.target.hp-=0.05*dt/16;}
  draw(ctx){if(!this.target) return; ctx.strokeStyle='cyan';ctx.beginPath();ctx.moveTo(this.x,this.y);ctx.lineTo(this.target.x,this.target.y);ctx.stroke();}
}
