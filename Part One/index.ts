// Datatypes
//The Primitives

// Common to both Js and Ts (Core)
/***
 * Boolean
 * Number
 * String
 */

let age: number = 100;
let firstName: string = "Eric";
let busy: boolean = true;

// Using typeof

const button = document.querySelector(".button");
const firstInput = document.querySelector("#first-input");
const secondInput = document.querySelector("#second-input");
const screen = document.querySelector(".screen");

function addNumbers(a: number, b: number) {
  screen.innerHTML = (a + b).toString();
}

button.addEventListener("click", () =>
  addNumbers(parseInt(firstInput.value), parseInt(secondInput.value))
);
