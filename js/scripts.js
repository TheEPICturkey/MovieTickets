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

function movieDisplay(movieTitle, age) {
  if (movieTitle === "brandonBuilding") {
    return brandonBuilding.movie + " Time: " + brandonBuilding.time + " Price : $" + brandonBuilding.price; 
  } else if (movieTitle === "brandonBob") {
    return brandonBob.movie + " Time: " + brandonBob.time + brandonBob.price + " Price: $";
  } else if (movieTitle === "billysRevenge") {
    return billysRevenge.movie + " Time: " + billysRevenge.time + " Price : $" + billysRevenge.price; 
  } else {
    return billyStrikes.movie + " Time: " + billyStrikes.time + " Price : $" + billyStrikes.price;
  }
}

window.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("btn");
  form.addEventListener("click", handleSubmission)
})

function handleSubmission(event){
  event.preventDefault();
  let movie = document.querySelector("#movies");
  let movieTitle = movie.value;
  let age = document.querySelector("input[type='number']").value;
  console.log(movieTitle);
  
  display(movieDisplay(movieTitle, age));
  
}

function display(info) {
  let h4 = document.querySelector("#display");
  h4.innerText = info;
}
