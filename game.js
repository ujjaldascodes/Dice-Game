var randnum1=Math.floor(Math.random() *6 )+1;//to generate number from 1-6

//For the Player1
var randimage1= "pic"+randnum1+".png" //to generate image from 1-6
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randimage1);

//For the player2
var randnum2=Math.floor(Math.random() *6 )+1;
var randimage2= "pic"+randnum1+".png"
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randimage2);

//if Player1 Wins
 if(randnum1>randnum2){
   document.querySelector("h1").innerHTML = "🏆 Player1 Wins!";
 }

 //if Player2 Wins
  else if(randnum2>randnum1){
    document.querySelector("h1").innerHTML = "🏆 Player2 Wins!";
  }

  //Tied
  else {
    document.querySelector("h1").innerHTML= " 😅 Match Drawn";
  };
