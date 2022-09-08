// header //
let maker = document.querySelector('#maker');
let list = document.querySelectorAll('ul li');
function moveindicator (e){
    maker.style.left = e.offsetLeft + 'px';
    maker.style.width = e.offsetWidth+ 'px'
}
list.forEach(link => {
    link.addEventListener('mousemove' , (e) =>{
        moveindicator(e.target);
    })
})
// add active class in hovered list item 
function activeLink(){
    list.forEach((item)=> 
    item.classList.remove('activat'));
    this.classList.add('activat');
}
list.forEach((item)=>
item.addEventListener('mouseover', activeLink))

// Certificates //
let card = document.getElementsByClassName('card');
        function ss(i){
            card[i].classList.toggle('active');
        }; 



// test
var x = document.getElementById('x');
function number(){
    x.classList.toggle('num');
}