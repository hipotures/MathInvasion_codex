export default class URLParams {
    constructor(){
        const params=new URLSearchParams(window.location.search);
        this.difficulty=params.get('difficulty')||'normal';
    }
}
