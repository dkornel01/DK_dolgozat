class Lampa{
    constructor(id,allapot,divElem){
        this.id=this.id;
        this.allapot=this.allapot;
        this.divElem=this.divElem;
        divElem.append(`<div class="${id}"<p><p><div>`)

        this.elem=$('article div:last-child');
        this.pelem=this.elem.children("p")
        this.elem.on("click",() =>{
            if(this.allapot){
                this.esemenyTrigger();
            }
        
        })
    }
    setAllapot(){
        if (allapot==false){
            allapot=true
            this.allapot=allapot
        }
        else {
            allapot=false
            this.allapot=allapot
        }
    }
    szinBeallit(){
        if (allapot==true){
            this.divElem().style.backgroundColor="blue";
        }
        else
        if (allapot==false){
            this.divElem().style.backgroundColor="red";
        }
    }
    esemenyTrigger(){
        const esemeny=new CustomEvent("elementKivalasztasa",{detail:this})
        window.dispatchEvent(esemeny)
    }
}
export default Lampa