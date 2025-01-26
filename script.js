let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset");
let turnO= true;
let boxesFilled = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

let headerText = document.querySelector(".header");
let Xscore = document.querySelector(".Xscore");
let Oscore = document.querySelector(".Oscore");
let X=0;
let O=0;

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = 'O';
            turnO=false;
        }
        else{
            box.innerText = 'X';
            turnO=true;
        }
        box.disabled = true;
        boxesFilled++;
        chechWinner();
    })
});

const chechWinner = () => {
    for(let pattern of winPatterns){
        if((boxes[pattern[0]].innerText!= "" && boxes[pattern[1]].innerText!= "" && boxes[pattern[2]].innerText!="")){
            if((boxes[pattern[0]].innerText=== boxes[pattern[1]].innerText && boxes[pattern[1]].innerText === boxes[pattern[2]].innerText)){
                showWinner(boxes[pattern[0]].innerText);
                disableAllBoxes();
                return;
            }
        }

        if(boxesFilled === 9){
            headerText.innerText = "It's a Tie !";
            disableAllBoxes();
        }
    }
};


const showWinner = (winner) =>{
    if(winner==="X"){
        headerText.innerText = "The Winner is PlayerX";
        Xscore.innerText = ++X;

    }
    else{
        headerText.innerText = "The Winner is PlayerO";
        Oscore.innerText = ++O;
    }
};


const disableAllBoxes = () => {
    boxes.forEach((box)=>{
        (box.disabled=true)
    });
};



resetButton.addEventListener("click",()=>{
    headerText.innerText= "TIC TAC TOE";
    boxesFilled = 0;
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled = false;
    })
});