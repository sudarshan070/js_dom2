//  In counter first take three buttons & set initial value h1
// Increment, Decrement, and Reset
// click on Inc button increment the value, click on Dec button decrement the value and click on reset goes to initial value
// select initial value
count = 0;
var h1 = document.querySelector("h1");
// select the button
// click on button, increment +1
var increment = document.querySelector(".incbtn");
var decrement = document.querySelector(".decbtn");
var reset = document.querySelector(".resetbtn");
function handler(event) {
  count = count + 1;
  h1.textContent = count;
}

function dechandler(event) {
  count = count - 1;
  h1.textContent = count;
}
function resethandler(event) {
  count = 0;
  h1.textContent = count;
}

// Manupulation
// event
increment.addEventListener("click", handler);
decrement.addEventListener("click", dechandler);
reset.addEventListener("click", resethandler);
