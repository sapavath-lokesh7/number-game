'use strict';

var nameOfTheUser = prompt("Eneter you name");
document.getElementById('name').textContent = `welcome ${nameOfTheUser} !`;
let x = Math.floor((Math.random() * 20) + 1);

const textToChange = document.querySelector(".inform");

let score = 10;
let final = 0;
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// document.querySelector(".mark").textContent = `${x}`;

document.querySelector('.submit').addEventListener('click', function () {
    if (!document.querySelector(".ip").value) {
        document.querySelector(".inform").textContent = `❌ No number`;
    }
    else if (document.querySelector(".ip").value == x) {
        document.querySelector(".inform").textContent = `🥳 Correct number`;
        document.querySelector(".mark").textContent = `${x}`;
        document.querySelector(".monkey").innerHTML = "🙊";
        document.querySelector("body").style.background = "linear-gradient(to left, rgb(0,0,0), rgb(239, 1, 1))";
        if(score > final){
            final = score
            document.querySelector(".final").textContent = `${final}`;
            alert(`${nameOfTheUser} you score is ${final}`);
        }
    } else if (document.querySelector(".ip").value > x) {
        if (score > 1) {
            document.querySelector(".inform").textContent = `⬆️you entered bigger number`;
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".inform").textContent = `😟 lost the game `;
            document.querySelector(".score").textContent = 0;
        }
    } else if (document.querySelector(".ip").value < x) {
        if (score > 1) {
            document.querySelector(".inform").textContent = `⬇️you entered smaller number`;
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".inform").textContent = `😟 lost the game `;
            document.querySelector(".score").textContent = 0;
        }
    }
    const randomColor = getRandomColor();
    textToChange.style.color = randomColor;
});

document.querySelector('.refresh').addEventListener('click',function(){
    score = 10;
    x = Math.floor((Math.random() * 20) + 1);
    document.querySelector(".inform").textContent = `🧑‍💻Guess the number`;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.background = " linear-gradient(to right, rgb(0,0,0), rgb(239, 1, 1)";
    document.querySelector(".mark").textContent = "🙈";
    document.querySelector(".monkey").innerHTML = "🙈";
});