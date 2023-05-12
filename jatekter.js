import Lampa from "./lampaTer.js";

class Jatekter{
    constructor(){
        let db=0;
        let allapotlista={};
        let meret=0;
        let lepes=0;
        const articleELEM=$("article");
        for (let index = 0; index < allapotlista ; index++) {
            const lam=new Lampa(index,allapotlista[index],articleELEM)
        }
        $(window).on("elemKivalasztasa",(event)=>{
            console.log(event.detail)
            if(allapotlista[id]==false){
                event.detail.setElem(allapot=true)
            }
            else{
                event.detail.setElem(allapot=false)
            }
        })
    }

    setAllapotlista(){
        for (let index = 0; index < meret; index++) {
            let szam=Math.floor(Math.random() * 100);
            if (szam<21){
                allapotlista.push(false);
            }
            else{
                allapotlista.push(true);
            }
        }
    }
    
    ellenorzes(db){
        if(db==meret);
    }
       

}
export default Jatekter