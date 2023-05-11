var randomNumber1 = Math.floor(Math.random() * 6 + 1); // By this we will get a random number from 1-6
var randomDiceImage = "dice"+ randomNumber1 +".png";   // This select the type of image used
var randomImageSource = "images/" + randomDiceImage;   // This will show a random image on the page.
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage2 = "dice"+ randomNumber2 +".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}

if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="It's a Tie, Refresh";
}
