export default class EventEmitter{
  constructor(){this.events={};}
  on(event,fn){(this.events[event]||(this.events[event]=[])).push(fn);}
  emit(event,...args){(this.events[event]||[]).forEach(fn=>fn(...args));}
}
