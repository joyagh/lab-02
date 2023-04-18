"use strict";
let username = prompt("What is your name?");
alert("Hello " + username + "!");

let answer1 = prompt("Am I from Georgia?").toLowerCase();

if (answer1 === "yes" || answer1 === "y") {
  //   console.log ("No, I'm actually from Tennessee!")
  alert("No, I'm actually from Tennessee!");
} else {
  // console.log ("You're right! I am from Tennessee")
  alert("You're right! I am from Tennessee!");
}

let answer2 = prompt("Did I go to University").toLowerCase();

if (answer2 === "yes" || answer2 === "y") {
  //  console.log ("I did attend University! Go Bulldogs!")
  alert("I did attend University! Go Bulldogs!");
} else {
  // console.log ("That's incorrect! I did attend university!")
  alert("That's incorrect! I did attend university!");
}

let answer3 = prompt("Have I worked as a farmer?").toLowerCase();

if (answer3 === "no" || answer3 === "n") {
  //  console.log ("You're right! However, I do love being on the farm!")
  alert("You're right! However, I do love being on the farm!");
} else {
  // console.log ("A farmer?? Really?")
  alert("A farmer?? Really? Manual labor isn't my thing.");
}

let answer4 = prompt("Do I want to study political science?").toLowerCase();

if (answer4 === "no" || answer4 === "no") {
  //console.log ("You're right! I want to study psychology!")
  alert("You're right! I want to study psychology!");
} else {
  // console.log ("I love following politics, but not enought to study it")
  alert("I love politics following politics, but not enought to study it");
}

let answer5 = prompt("Do I like to travel?").toLowerCase()

if (answer5 === "yes"|| answer5 === "y") {
  //console.log ("That's right!! I want to go to Jordan next!")
  alert("That's right!! I want to go to Jordan next!");
} else {
  //console.log ("Incorrect! I LOVE to travel")
  alert("Incorrect! I LOVE to travel");
}