function next(num){

document
.querySelectorAll('.screen')
.forEach(screen=>{

screen.classList.remove('active');

});

document
.getElementById('s'+num)
.classList.add('active');

window.scrollTo({

top:0,

behavior:'smooth'

});

}

const btnNo =
document.getElementById('btnNo');

btnNo.addEventListener('mouseover',()=>{

btnNo.style.position='fixed';

btnNo.style.left=
Math.random()*
(window.innerWidth-120)
+'px';

btnNo.style.top=
Math.random()*
(window.innerHeight-80)
+'px';

});
