"use strict";

const output = document.querySelector("p");
const myInput = document.querySelector("input");
const btn = document.querySelector("button");

const check = function () {
  let randomNumber = getRan(1, 5);
  output.textContent += `${randomNumber}, `;
  console.log(randomNumber);
};

const getRan = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

btn.addEventListener("click", check);
