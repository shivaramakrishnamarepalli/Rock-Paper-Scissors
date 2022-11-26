let myScore=0;
let compScore=0;

let getOpt=0;
let arr=["Rock","Paper","Scissor"];
const optRock = document.querySelector('#rock');
optRock.addEventListener('click',()=>{
    getOpt=0;
    checkScore();
});
const optPaper = document.querySelector('#paper');
optPaper.addEventListener('click',()=>{
    getOpt=1;
    checkScore();
});
const optScissor = document.querySelector('#scissor');
optScissor.addEventListener('click',()=>{
    getOpt=2;
    checkScore();
});

function getComputerChoice(){
    let val=Math.floor(Math.random()*3);
    let str="null";
    if(val==0){
        str="rock";
    }
    else if(val==1){
        str="paper";
    }
    else if(val==2){
        str="scissor";
    }
    return str;
}

const textBox= document.querySelector('.textBox');
const matter = document.createElement('div');
matter.textContent='Choose a button to start game!';
const score = document.createElement('div');
matter.classList.add('display');
score.classList.add('display');
textBox.appendChild(score);
textBox.appendChild(matter);

function checkScore(){
    let res=playRound();
    console.log(res);
    matter.textContent=res;
    score.textContent="Scores->"+myScore+":"+compScore;
    if(myScore==5)
    {
        reset('You');
    }
    if(compScore==5)
    {
        reset('computer');
    }
}



function reset(wnr){
    const winner = document.createElement('div');
    winner.textContent=wnr+" won the match!";
    winner.style.color='white';
    winner.classList.add('display');
    textBox.appendChild(winner);
    const resetGame = document.createElement('button');
    resetGame.textContent="Reset Game ?"
    resetGame.classList.add('btn');
    resetGame.classList.add('reset');
    resetGame.style.backgroundColor='green';
    textBox.appendChild(resetGame);
    myScore=0;
    compScore=0;

    const optreset = document.querySelector('.reset');
    optreset.addEventListener('click',()=>{
        winner.remove();
        resetGame.remove();
        score.textContent='';
        matter.textContent='Choose a button to start game!';
        textBox.appendChild()
    });
}

function playRound()
{   
    const str=getComputerChoice();
    if(getOpt==0)
    {
        if(str=="paper")
        {
            compScore++;
            return "Computer Won! paper beats rock";
        }
        else if(str=="rock")
        {
            return "Tie! rocks";
        }
        else{
            myScore++;
            return "You won! rock beats scissor";
        }
    }
    else if(getOpt==1)
    {
        if(str=="scissor")
        {
            compScore++;
            return "Computer Won! Scissor beats paper";
        }
        else if(str=="paper")
        {
            return "Tie! papers";
        }
        else{
            myScore++;
            return "You won! paper beats rock";
        }
    }
    else if(getOpt==2)
    {
        if(str=="rock")
        {
            compScore++;
            return "Computer Won! rock beats scissor";
        }
        else if(str=="scissor")
        {
            return "Tie! scissors";
        }
        else{
            myScore++;
            return "You won! Scissor beats paper";
        }
    }
}
