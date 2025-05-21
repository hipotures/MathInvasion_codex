export default class HealEffect {
  constructor(enemy,duration=1000){this.enemy=enemy;this.time=duration;}
  update(dt){this.time-=dt;if(this.time<=0){this.dead=true;}else{this.enemy.hp=Math.min(this.enemy.hp+0.05*dt/16, this.enemy.maxHp||10);}}
}
