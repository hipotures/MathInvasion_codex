import BasicEnemy from './basicEnemy.js';

export default class BossEnemy extends BasicEnemy {
  constructor(x,y){super(x,y);this.hp=50;this.r=20;}
}
