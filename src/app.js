/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  genCard();
  var button = document.getElementById("boton");
  button.addEventListener("click", genCard);
};

function genCard() {
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q"
  ];
  let suits = ["♦", "♥", "♠", "♣"];
  let suitNames = ["diamond", "heart", "spade", "club"];

  let randomValue = values[Math.floor(Math.random() * values.length)];
  let randomSuitIndex = Math.floor(Math.random() * suits.length);
  let randomSuit = suits[randomSuitIndex];
  let suitName = suitNames[randomSuitIndex];

  let cardElement = document.getElementById("card");
  cardElement.innerHTML = `<span class="card ${suitName}">${randomValue} ${randomSuit}</span>`;
}
