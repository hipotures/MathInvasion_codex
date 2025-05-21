export default class PausableTimer{
  constructor(callback,interval){
    this.cb=callback;this.interval=interval;this.remaining=interval;this.running=false;
  }
  start(){if(this.running)return;this.running=true;this.startTime=performance.now();this.id=setTimeout(()=>{this.running=false;this.cb();},this.remaining);}
  pause(){if(!this.running)return;clearTimeout(this.id);this.remaining-=performance.now()-this.startTime;this.running=false;}
  resume(){if(!this.running){this.start();}}
}
