"use strict";

const output = document.querySelector("p");
const myInput = document.querySelector("input");
const btn = document.querySelector("button");
let lowValue = 1;
let highValue = 10;

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
  output.textContent = `Guess a number between ${lowValue} and ${highValue}`;
  myInput.setAttribute("type", "number");
  myInput.setAttribute("min", lowValue);
  myInput.setAttribute("max", highValue);
  btn.textContent = "Enter Guess";
  console.log(lowValue, highValue);
};

initiateGame();

btn.addEventListener("click", check);
