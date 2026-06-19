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

if(btnNo){

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

}

const emojis = [
"❤️",
"💖",
"💕",
"💗",
"💘"
];

for(let i=0;i<25;i++){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML =
emojis[
Math.floor(
Math.random()*emojis.length
)
];

heart.style.left =
Math.random()*100 + "vw";

heart.style.fontSize =
(Math.random()*20+15)+"px";

heart.style.animationDuration =
(Math.random()*6+6)+"s";

heart.style.animationDelay =
(Math.random()*5)+"s";

document.body.appendChild(heart);

}
