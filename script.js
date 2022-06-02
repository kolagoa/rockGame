 
    

let computerWin=0;
let humanWin =0;



function computerPlay()
 {

 //this function returns randomaly the
 //options that are played

 let choiceOptions =['Rock','Paper','Cissors'];

 console.log(choiceOptions);

 //get the random number.
 let random= Math.floor( Math.random()* parseInt(choiceOptions.length));

    console.log(random);

  //select random item 
  console.log(choiceOptions[random]);  

 
return choiceOptions[random];

}
function resetGame(){

    //rest the page for next game //
//enable the best of text box//
    document.getElementById("bestOfNumber").readOnly = false;
    
//clear other div used //
    const result = document.querySelector('#results');
    const overall = document.querySelector('#overall');
    const playedNo = document.querySelector('#playedNo');
    const playedLeft = document.querySelector('#playedLeft');

    result.textContent='';
    overall.textContent='';
    playedNo.textContent='';
    playedLeft.textContent='';

    //reset the wins and number played
    humanWin=0;
    computerWin=0 ;

}
function bestGame()
{
     //displayed best of input while gave is ongoing //
    document.getElementById("bestOfNumber").readOnly = true;

    //get best of
    let  bestOfNumber = parseInt(
         document.getElementById('bestOfNumber').value );

    if(computerWin+humanWin < bestOfNumber) {
//compare number played vs best of and play the game //

        let computerChoice =computerPlay();
        let humanChoice = document.getElementById('human').value; 
        let feedBack=   playPaperGame(computerChoice,humanChoice);
        const result = document.querySelector('#results');
        const overall = document.querySelector('#overall');

        result.textContent = feedBack;
        overall.textContent =' Computer Wins = '+
           computerWin + '\n '+ ' Your Wins = ' + humanWin;
 }
 else
    {
        if(computerWin>humanWin)
        {
          const result = document.querySelector('#results');        

        result.textContent = 'Final Results! Computer Wins';

        }
        else if (humanWin>computerWin)
        {
            const result = document.querySelector('#results');        

        result.textContent = 'Final Results! You Win';

        }
        else
        {
            const result = document.querySelector('#results');        

          result.textContent = "Final Results! It's a Draw";

        }

    }

    //check number of times played

    const playedNo = document.querySelector('#playedNo');
    const playedLeft = document.querySelector('#playedLeft');
     
     //get total number of times played//
     let noplayed = computerWin+humanWin; 

     playedNo.textContent='Played '+ noplayed +' Times';

     let remainingTimes =bestOfNumber - noplayed;

     playedLeft.textContent='Remaining '+ remainingTimes +' Times'   



    
}
function playPaperGame(computer, human)
{
 
    //get the input of the players
    let computerInput =  computer;
    let humanInput =human ;

 // check if same
  if (computerInput==humanInput)
  {   
    return  "It's a Draw!" ;   
  }
  else
  {
    if(computerInput=='Rock' && humanInput=='Cissors')
    {
        computerWin++;
        return  "You loose!" ;
    }
    else if (computerInput=='Cissors' && humanInput=='Paper')
    {
        computerWin++;
          return  "You loose!" ;
    }
    else if (computerInput=='Paper' && humanInput=='Rock')
    {   computerWin++; 
        return  "You loose!" ;
    }
    else
    {
        if(humanInput=='Rock' && computerInput=='Cissors')
    {   humanWin++;
        return  "You Win!" ;
    }
    else if (humanInput=='Cissors' && computerInput=='Paper')
    { 
        humanWin++;
        return  "You Win!" ;
    }
    else if (humanInput=='Paper' && computerInput=='Rock')
    {    humanWin++;
        return  "You Win!" ;
    }
    }
  }
}

 
