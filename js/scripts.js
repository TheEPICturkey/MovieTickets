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

function title(movieTitle) {
  if (movieTitle === "brandonBuilding") {
    return brandonBuilding.movie
  } else if (movieTitle === "brandonBob") {
    return brandonBob.movie
  } else if (movieTitle === "billysRevenge") {
    return billysRevenge.movie
  } else {
    return billyStrikes.movie
  }
}

function times(movieTitle) {
  if (movieTitle === "brandonBuilding") {
    return brandonBuilding.time
  } else if (movieTitle === "brandonBob") {
    return brandonBob.time
  } else if (movieTitle === "billysRevenge") {
    return billysRevenge.time
  } else {
    return billyStrikes.time
  }
}

function prices(movieTitle, age) {
  let priceOfMovie = 0;
  let mod = 0.8;

  if (movieTitle === "brandonBuilding") {
    priceOfMovie = brandonBuilding.price;
  } else if (movieTitle === "brandonBob") {
    priceOfMovie = brandonBob.price;
  } else if (movieTitle === "billysRevenge") {
    priceOfMovie = billysRevenge.price;
  } else {
    priceOfMovie = billyStrikes.price;
  }

  if (age <= 10 || age >= 60) {
    return priceOfMovie * mod;
  } else {
    return priceOfMovie;
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
  let price = Ticket
  let age = document.querySelector("input[type='number']").value;
``  
  displayInfo(title(movieTitle), times(movieTitle), prices(movieTitle, age));
}

function displayInfo(title, time, price) {
  let h4Title = document.querySelector("#title");
  let h4Time = document.querySelector("#time");
  let h4Price = document.querySelector("#price");

  h4Title.innerText = title;
  h4Time.innerText = "Times: " + time;
  h4Price.innerText = "Price: $" + price;
}

// function handleSubmission(event){
//   event.preventDefault();
//   const orderDisplay = document.getElementById("Ticket");
//   orderDisplay.innerHTML="";
//   const myCost = listCost(myOrder);
//   displayOrder(myOrder, myCost);
//   displayOrder(cost);
// }
// function listCost (convertedArray) {
  //   const listArray = []
  //   convertedArray.forEach(function(element){
  //   switch (element) {
  //     case("brandonBuilding"):
  //       listArray.push("15.00")
  //       break;
  //     case("brandonBob"):
  //       listArray.push("15.00")
  //       break;   
  //     case("billysRevenge"):
  //       listArray.push("15.00")
  //       break;   
  //     case("billyStrikes"):
  //       listArray.push("15.00")
  //       break;
  //     default:
  //       listArray.push("20.00");
  //       console.log("pushing" + element)
  //     }
  //   });
  //   return(listArray);
  // }