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

let myScore=0;
let compScore=0;

function oneRound()
{
    console.log("Scores->",myScore,":",compScore);
    const userChoice= prompt("enter rock/paper/scissor","");
    const str=getComputerChoice();
    let result;
    if(userChoice.toLowerCase()=="rock")
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
    else if(userChoice.toLowerCase()=="paper")
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
    else if(userChoice.toLowerCase()=="scissor")
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
    /*else {
        return "Please enter correctly!";
        i--;
    }*/
}

function game()
{
    for(i=0;i<5;i++)
    {
        let res=oneRound();
        console.log(res);
    }
    if(myScore>compScore)
    {
        console.log("You Won");
    }
    else if(compScore>myScore)
    {
        console.log("computer won");
    }
    else 
    {
        console.log("It's a tie game");
    }
}

game();