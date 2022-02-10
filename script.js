"use strict";

const output = document.querySelector("p");
const myInput = document.querySelector("input");
const btn = document.querySelector("button");
let lowValue = 0;
let highValue = 0;
let hiddenNumber;
const getRan = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const check = function () {
  let randomNumber = getRan(1, 5);
  console.log(randomNumber);
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
  console.log(lowValue, highValue, hiddenNumber);
};

initiateGame();

btn.addEventListener("click", check);
