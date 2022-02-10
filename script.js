"use strict";

const output = document.querySelector("p");
const myInput = document.querySelector("input");
const btn = document.querySelector(".click");
const reset = document.querySelector(".reset");
const answer = document.querySelector(".answer");

let lowValue = 0;
let highValue = 0;
let hiddenNumber = 0;

const getRan = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const check = function () {
  const inputValue = myInput.value;
  let message = "";
  answer.textContent = "";
  if (Number(inputValue) === hiddenNumber) {
    message = `Correct it was ${hiddenNumber}`;
  } else {
    message = inputValue < hiddenNumber ? "Go Higher" : "Go Lower";
  }
  answer.textContent = message;
};

const initiateGame = function () {
  lowValue = getRan(1, 7);
  highValue = getRan(lowValue + 1, 20);
  hiddenNumber = getRan(lowValue, highValue);
  output.textContent = `Guess a number between ${lowValue} and ${highValue}`;
  myInput.setAttribute("type", "number");
  myInput.setAttribute("min", lowValue);
  myInput.setAttribute("max", highValue);
  btn.textContent = "Enter Guess";
  answer.textContent = "";
  myInput.value = "";
  console.log(hiddenNumber);
};

initiateGame();

btn.addEventListener("click", check);
reset.addEventListener("click", initiateGame);
