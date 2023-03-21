//affectation des variables pour savoir le modèle de boite du titre 

var Height = document.querySelector('banniereduhaut').clientHeight;
var Width = document.querySelector('banniereduhaut').clientWidth;
margin = Width/30

window.addEventListener("scroll", function() {
    console.log(Height+margin) 
    if(this.scrollY > Height+margin && this.scrollY<1400 ) {
        document.querySelector('div.fixer').classList.add('fixed');
    } else {
        document.querySelector('div.fixer').classList.remove('fixed');
    }
}, false);
}
    
