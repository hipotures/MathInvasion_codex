import BasicEnemy from '../entities/enemies/basicEnemy.js';

export default class EnemyManager {
    constructor(map){
        this.map=map;
        this.list=[];
    }
    add(enemy){this.list.push(enemy);}
    update(dt){
        for(const e of this.list) e.update(dt, this.map);
        this.list=this.list.filter(e=>!e.dead);
    }
    draw(ctx){for(const e of this.list) e.draw(ctx);}
}
