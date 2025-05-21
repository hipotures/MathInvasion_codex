import BaseTower from './baseTower.js';

export default class SniperTower extends BaseTower {
  constructor(i,j){super(i,j);this.reload=3000;this.range=200;}
  shoot(){}
}
