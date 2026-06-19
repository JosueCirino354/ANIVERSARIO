function next(num){

```
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
```

}

const btnNo =
document.getElementById('btnNo');

if(btnNo){

```
btnNo.addEventListener('mouseover',()=>{

    btnNo.style.position='fixed';

    btnNo.style.left =
    Math.random() *
    (window.innerWidth - 120)
    + 'px';

    btnNo.style.top =
    Math.random() *
    (window.innerHeight - 80)
    + 'px';

});
```

}

const emojis = [
"🌼",
"🌸",
"🌷",
"💜",
"🤍"
];

for(let i=0;i<40;i++){

```
const flower =
document.createElement("div");

flower.classList.add("heart");

flower.innerHTML =
emojis[
    Math.floor(
        Math.random()*emojis.length
    )
];

flower.style.left =
Math.random()*100 + "vw";

flower.style.fontSize =
(Math.random()*20+15)+"px";

flower.style.animationDuration =
(Math.random()*6+6)+"s";

flower.style.animationDelay =
(Math.random()*5)+"s";

document.body.appendChild(flower);
```

}
