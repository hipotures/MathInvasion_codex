import BasicEnemy from '../entities/enemies/basicEnemy.js';

export default class WaveManager {
    constructor(enemyManager,map){
        this.enemyManager=enemyManager;
        this.map=map;
        this.wave=0;
        this.cooldown=0;
    }
    update(dt){
        if(this.cooldown>0){this.cooldown-=dt;return;}
        this.wave++;
        this.enemyManager.add(new BasicEnemy(0,0));
        this.cooldown=5000;
    }
}
