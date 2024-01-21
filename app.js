let gameseq=[];
let userseq=[];

let btns=["red","yellow","purple","green"];

let started=false;
let level=0;
h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    let ranIdx=Math.floor(Math.random()*3);
    let ranCol=btns[ranIdx];
    let ranBtn=document.querySelector(`.${ranCol}`);
    gameseq.push(ranCol);
    console.log(gameseq);
    btnFlash(ranBtn);
}
function checkAns(idx){
    // console.log("current level=",level);
    //   idx=level-1;
    if(userseq[idx]===gameseq[idx]){
       if(userseq.length==gameseq.length){
         setTimeout(levelUp,1000);
       }
    }else{
        h2.innerHTML=`Game over! your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);

    checkAns(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}