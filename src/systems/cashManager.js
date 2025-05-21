export default class CashManager {
    constructor(start=100){
        this.cash=start;
        this.onChange=()=>{};
    }
    add(amount){this.cash+=amount;this.onChange(this.cash);}
    spend(amount){if(this.cash>=amount){this.cash-=amount;this.onChange(this.cash);return true;}return false;}
}
