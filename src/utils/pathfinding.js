export function astar(start, goal, width, height, passableFn) {
    const open = [];
    const cameFrom = {};
    const gScore = {};
    const fScore = {};

    const key = (p) => `${p.x},${p.y}`;
    gScore[key(start)] = 0;
    fScore[key(start)] = dist(start, goal);
    open.push({...start, f:fScore[key(start)]});

    const dirs = [
        {x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}
    ];

    while(open.length){
        open.sort((a,b)=>a.f-b.f);
        const current = open.shift();
        if(current.x===goal.x && current.y===goal.y){
            return reconstruct(current);
        }
        for(const d of dirs){
            const nx=current.x+d.x, ny=current.y+d.y;
            if(nx<0||ny<0||nx>=width||ny>=height) continue;
            if(!passableFn(nx,ny)) continue;
            const neighborKey=key({x:nx,y:ny});
            const tentative=gScore[key(current)]+1;
            if(tentative< (gScore[neighborKey]??Infinity)){
                cameFrom[neighborKey]=current;
                gScore[neighborKey]=tentative;
                fScore[neighborKey]=tentative+dist({x:nx,y:ny},goal);
                if(!open.find(p=>p.x===nx&&p.y===ny)){
                    open.push({x:nx,y:ny,f:fScore[neighborKey]});
                }
            }
        }
    }
    return null;

    function reconstruct(node){
        const path=[{x:node.x,y:node.y}];
        let k=key(node);
        while(cameFrom[k]){
            node=cameFrom[k];
            k=key(node);
            path.unshift({x:node.x,y:node.y});
        }
        return path;
    }
}

function dist(a,b){
    return Math.abs(a.x-b.x)+Math.abs(a.y-b.y);
}
