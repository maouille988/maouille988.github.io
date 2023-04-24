function fixer(){
    
    window.addEventListener("scroll", function() {
        var Height = document.getElementById('banniereduhaut').clientHeight;
        var Width = document.getElementById('banniereduhaut').clientWidth;
        var Heightdoc = document.getElementById('document').clientHeight;
        var Heightmenu = document.getElementById('menu').clientHeight;
        var deuxpourcent = Width/30
        var maxmenu = Height+deuxpourcent+Heightdoc-Heightmenu-10
        console.log(maxmenu)
        console.log(this.scrollY)
        if(this.scrollY > Height+deuxpourcent-10 && this.scrollY<maxmenu ) {
            document.querySelector('div.fixer').classList.add('fixed');
        } 
        else if(this.scrollY > maxmenu ) {  
            console.log("fjufvg")
            document.querySelector('div.fixer').classList.remove('fixed');
        }
        else {
            document.querySelector('div.fixer').classList.remove('fixed');
        }
    }, false);
}
