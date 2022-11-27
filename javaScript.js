let flag=0;
let myScore=0;
let compScore=0;

let getOpt='';
let arr=["Rock","Paper","Scissor"];
const opt = document.querySelectorAll('.btn');
opt.forEach(btn => btn.addEventListener('click',()=>{
    getOpt=event.target.id;
    checkScore();
    event.target.classList.add('trans');
    event.target.classList.remove('onpoint');
}));


const tend = document.querySelectorAll('button');
tend.forEach(button => button.addEventListener('transitionend',removeTransition) );

function removeTransition(e)
{
    if(e.propertyName!='transform') return;
    this.classList.remove('trans');
}

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
    matter.textContent=res;
    score.textContent="Scores->"+myScore+":"+compScore;
    if(myScore==5)
    {
        reset('You');
        flag=1
    }
    if(compScore==5)
    {
        reset('computer');
        flag=1
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
    score.textContent='';
    matter.textContent='';

    const optreset = document.querySelector('.reset');
    optreset.classList.add('trans');
    optreset.addEventListener('click',()=>{
        winner.remove();
        resetGame.remove();
        score.textContent='';
        matter.textContent='Choose a button to start game!';
        myScore=0;
        compScore=0;
    });
}

function playRound()
{   
    const str=getComputerChoice();
    if(getOpt=='rock')
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
    else if(getOpt=='paper')
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
    else if(getOpt=='scissor')
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

const point = document.querySelectorAll('button');
point.forEach(button => button.addEventListener('mouseover',(event)=>{   event.target.classList.add('onpoint');}) );
point.forEach(button => button.addEventListener('mouseout',(event)=>{    event.target.classList.remove('onpoint');
}) );