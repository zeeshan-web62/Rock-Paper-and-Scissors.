let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
  const options = ["rock","paper","scissors"];
  const randidx= Math.floor(Math.random() * 3);
  return options[randidx];
};

const drawgame = () => {
    msg.innerText = "Draw. play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin,userchoice,compchoice) => {
    if(userwin) {
      userscore++;
      userscorepara.innerText = userscore;
      console.log("you win! ");
      msg.innerText = `You win! your ${userchoice} beat ${compchoice}`;
      msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you loss");
        msg.innerText = `You loss!  ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    } 
}


const playgame = (userchoice) => {
 const compchoice = gencompchoice ();

 if(userchoice=== compchoice){
    drawgame();
 }
 else {
    let userwin = true;
    if(userchoice ==="rock"){
      userwin =  compchoice === "paper" ? false:true;
    }
    else if (userchoice === "paper"){
      userwin =  compchoice ==="scissors" ? false : true;
    } 
    else {
       userwin = compchoice === "rock" ? false :true;
    }
    showWinner(userwin,userchoice,compchoice);
 }
};


choices.forEach((choice) =>{
  choice.addEventListener("click",() => {
    const userchoice = choice.getAttribute("id")
    // console.log("choice was clicked",userchoice);  
    playgame(userchoice);  
  });
});