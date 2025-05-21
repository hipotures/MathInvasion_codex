export default class SlowEffect {
  constructor(enemy,duration=1000){this.enemy=enemy;this.time=duration;this.rate=0.5;this.applied=false;}
  update(dt){if(!this.applied){this.enemy.speed*=this.rate;this.applied=true;}this.time-=dt;if(this.time<=0){this.enemy.speed/=this.rate;this.dead=true;}}
}
