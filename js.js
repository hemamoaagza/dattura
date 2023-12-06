var button = document.querySelector(".ancor");
var closew = document.querySelector(".close");
var clicksh3 = document.querySelector("span");
let mywindow;

// fun for opening , closing the window

function e() {
  mywindow = window.open("https://www.apple.com/sa-ar/iphone-15-pro/", "");
}

function c() {
  mywindow.close();
}

// input setup to return values as number

let input;
function returntext() {
  input = document.querySelector("#inp").valueAsNumber;
}

// the final function that contain all functions and add interval and clear it

let x = 0;
let counter;

function test() {
  e();
  setTimeout(() => {
    c();
  }, 4000);
  x++;

  clicksh3.innerText = ` ${x}`;
  if (x === input) {
    clearInterval(counter);
    alert("Job Done!");
  }
}

// add eventlistener to the click to interval the test function

button.addEventListener("click", function () {
  counter = setInterval(test, 5000);
});
