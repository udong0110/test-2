
let randomImageSource = "images/dice" + randomNumber1 + ".png";


document.querySelector(".img1").setAttribute("src", randomImageSource);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImageSource2);



let title = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    // Player 1이 이겼을 때
    title.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    // Player 2가 이겼을 때
    title.innerHTML = "Player 2 Wins! 🚩";
} else {
    // 비겼을 때
    title.innerHTML = "Draw!";
}