export function dist2(a,b){
  const dx=a.x-b.x, dy=a.y-b.y; return dx*dx+dy*dy;
}
export function randInt(min,max){return Math.floor(Math.random()*(max-min+1))+min;}
