import BasicEnemy from './basicEnemy.js';
import HealEffect from '../effects/healEffect.js';

export default class HealerEnemy extends BasicEnemy {
  constructor(x,y){super(x,y);}
  update(dt,map){super.update(dt,map);}
}
