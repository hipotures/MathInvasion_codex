export default class UIManager {
    constructor(cash,waves,towerPlacement){
        this.cash=cash;
        this.waves=waves;
        this.towerPlacement=towerPlacement;
        this.cashDisplay=document.getElementById('cashDisplay');
        this.waveCounter=document.getElementById('waveCounter');
        this.cash.onChange=(v)=>this.updateCash(v);
        this.updateCash(this.cash.cash);
    }
    update(){
        this.waveCounter.textContent=`Wave: ${this.waves.wave}`;
    }
    updateCash(v){
        this.cashDisplay.textContent=`Cash: ${v}`;
    }
}
