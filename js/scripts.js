//Buisness Logic
function movieList() {
  this.movieTitle;
  this.movieId = 0;
}

movieList.prototype.assignId = function() {
  this.movieId += 1
  return this.movieId;
}


function Ticket(movie, movieAge, time, price) {
  this.movie = movie;
  this.movieAge = movieAge;
  this.time = time;
  this.price = price;
}

let brandonBuilding = new Ticket("Brandon's Big Building", 18, "8:30PM", 15);
let brandonBob= new Ticket("Brandon Bob!", 0, "10:00AM", 15);
let billysRevenge = new Ticket("Billy's Revenge", 18, "8:30PM", 15);
let billyStrikes = new Ticket("Billy Strikes", 5, "1:30PM", 15);

function priceCalc(age) {

}

window.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("btn");
  form.addEventListener("click", handleSubmission)
})

function handleSubmission(event){
  event.preventDefault();
  let movie = document.querySelector("#movies");
  let movieTitle = movie.options[movie.selectedIndex].text;
  let age = document.querySelector("input[type='number']").value;

}



// Ticket.prototype.calcPrice = function(){
//   price = 20000; //formula here
//   let ageMod = 1;
//   let timeMod = 1;
  
//   if (this.age <= 13) {
//     ageMod = 0.5;
//   } else if (this.age >= 60) {
//     ageMod = 0.75;
//   } else if (this.age <60 || this.age >14){
//     ageMod = 1;
//   } else {
//     window.alert("Are you even human?")
//   }

//   if (this.time >= "08:00:00" && this.time <= "17:00:00") {
//     timeMod = 0.40;
//   }
// }

//UI Logic

// function Ticket(movie, movieAge, age, time) {
//   this.movie = movie;
//   this.movieAge = movieAge;
//   this.age = age;
//   this.time = time;
// }

// Ticket.prototype.calcPrice = function(){
//   price = 20000; //formula here
//   let ageMod = 1;
//   let movieMod = 1;
//   let timeMod = 1;

//   if (this.movieAge === "old") {
//     movieMod = 0.75;
//   }
  
//   if (this.age <= 13) {
//     ageMod = 0.5;
//   } else if (this.age >= 60) {
//     ageMod = 0.75;
//   } else if (this.age <60 || this.age >14){
//     ageMod = 1;
//   } else {
//     window.alert("foo");
//   }


//   if (this.time >= "08:00:00" && this.time <= "17:00:00") {
//     timeMod = 0.75;
//   }

//   price = price * ageMod * movieMod * timeMod;
//   return price;
// };

// //UI Logic
// window.addEventListener("load", function() {
//   const form = document.getElementById("btn");
//   form.addEventListener("submit", handleSubmission)
// })

// function handleSubmission(event){
//   event.preventDefault();
//   const form = document.getElementById("ticket-form");
//   const movie = form.movie;
//   const age = form.age.value;
//   const time = form.time.value;
//   const movieAge = form.movie.value;

//   console.log(movie + " " + age + " " + time + " " + movieAge);
// }