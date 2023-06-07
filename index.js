console.log("Welcome to Tic-Tac Game") ;
// let music = new Audio("music.wav");
let audio_turn = new Audio("music2.wav");
let game_over = new Audio("music.wav");
let turn = "X";
let isgame_over = false;

// Function to change the turn
const changeturn = () =>
{
    return turn==="X"?"O":"X";
}

// Function to check for a win
const checkwin = () =>
{
    let boxtext = document.getElementsByClassName('boxtext');
    // console.log(boxtext);
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText==boxtext[e[1]].innerText) && (boxtext[e[2]].innerText==boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="" ))
        {
            document.querySelector('.info').innerText=boxtext[e[0]].innerText +" Won";
            isgame_over = true;
            document.querySelector('.image-box').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
console.log(boxes);
Array.from(boxes).forEach(Element =>
    {
        let boxtext = Element.querySelector('.boxtext');
        Element.addEventListener('click',() =>
        {
          if(boxtext.innerText==='')  
          {
            boxtext.innerText=turn;
            turn = changeturn();
            audio_turn.play();
            checkwin();
            if(!isgame_over)
            {
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
          }
        })
    }
)

//Reset Button
reset.addEventListener("click",()=>
{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(Element=>
        {
            Element.innerText="";
        }) ;
        turn="X";
        isgame_over = false;
        document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
        document.querySelector('.image-box').getElementsByTagName('img')[0].style.width = "0px";

})

