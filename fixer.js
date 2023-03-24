function fixer(){
    var Height = document.getElementById('banniereduhaut').clientHeight;
    var Width = document.getElementById('banniereduhaut').clientWidth;
    margin = Width/30

    window.addEventListener("scroll", function() {
        console.log(Height+margin) 
        if(this.scrollY > Height+margin-10 ) {
            document.querySelector('div.fixer').classList.add('fixed');
        } else {
            document.querySelector('div.fixer').classList.remove('fixed');
        }
    }, false);
}
