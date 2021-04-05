var randomNum1 = Math.floor(Math.random() * 6 + 1); //Random num generator 1-6 for first dice.

var randomImageSource1 = "images/dice" + randomNum1 + ".png"; //Image source.
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1); //Accessing Image with DOM.


var randomNum2 = Math.floor(Math.random() * 6 + 1); //Random num generator 1-6 for first dice.

var randomImageSource2 = "images/dice" + randomNum2 + ".png"; //Image source.
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); //Accessing Image with DOM.

//IF statement to modify inner HTML depending on winner.
if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNum1 < randomNum2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
