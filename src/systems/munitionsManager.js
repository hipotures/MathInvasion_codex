export default class MunitionsManager {
    constructor(){
        this.list=[];
    }
    add(m){this.list.push(m);}
    update(dt){for(const m of this.list) m.update(dt);this.list=this.list.filter(m=>!m.dead);}
    draw(ctx){for(const m of this.list) m.draw(ctx);}
}
