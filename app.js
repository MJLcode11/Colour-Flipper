//jshint esversion: 6

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const colour = document.querySelector(".colour");

btn.addEventListener('click', function(){
  var randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber]
  colour.textContent = colors[randomNumber];
});


function getRandomNumber() {
  return Math.floor(Math.random() *colors.length);
};
