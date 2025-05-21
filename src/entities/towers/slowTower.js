import BaseTower from './baseTower.js';

export default class SlowTower extends BaseTower {
  constructor(i,j){super(i,j);this.reload=1000;}
  shoot(){}
}
