console.log("welcome to tic tac toe");
let music=new Audio("music.mp3");
let turnmusic=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn = "X"
let gamefinish=false;

// funstioc to change the turn 
const changeturn=() =>{
    return (turn === "X") ? "0":"X"
}

// function to check for a win 
const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
let wins=[
    [0,1,2,5,5,0],
    [3,4,5,5,15,0],
    [6,7,8,5,25,0],
    [0,3,6,-5,14,90],
    [1,4,7,5,15,90],
    [2,5,8,15,15,90],
    [0,4,8,5,15,45],
    [2,4,6,5,15,135]
]
wins.forEach(e =>{
if(  (boxtext[e[0]].innerText === boxtext[e[1]].innerText ) && ( boxtext[e[0]].innerText === boxtext[e[2]].innerText ) && ( boxtext[e[0]].innerText !== "")){

    document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";

    gamefinish=true;

    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="100px";

    document.querySelector('.line').style.transform = ` translate( ${e[3]}vw , ${e[4]}vw ) rotate( ${e[5]}deg)`;
    document.querySelector('.line').style.width="20vw";

}
})
}


// game logic
// music.play()
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
if(boxtext.innerText === ''){
    boxtext.innerText =turn;
   turn= changeturn();
    turnmusic.play();
    checkwin();
    if(!gamefinish){
    document.getElementsByClassName("info")[0].innerText = "turn for "+ turn;
    }
}

    } )
})


// add onvlivk listener to reset button 
reset.addEventListener('click',() =>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
element.innerText=""
    });
    turn="X";
    gamefinish=false;
        document.getElementsByClassName("info")[0].innerText = "turn for "+ turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
        document.querySelector('.line').style.width="0vw";

})