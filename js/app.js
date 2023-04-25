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

let answer2 = prompt("Did I go to university").toLowerCase();

if (answer2 === "yes" || answer2 === "y") {
  //  console.log ("I did attend university! Go Bulldogs!")
  alert("I did attend university! Go Bulldogs!");
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

let answer5 = prompt("Do I like to travel?").toLowerCase();

if (answer5 === "yes" || answer5 === "y") {
  //console.log ("That's right!! I want to go to Jordan next!")
  alert("That's right!! I want to go to Jordan next!");
} else {
  //console.log ("Incorrect! I LOVE to travel")
  alert("Incorrect! I LOVE to travel");
}

let answer6 = prompt("Have I visited 6 countries?").toLowerCase();

if (answer6 === "no" || answer6 === "n") {
  //console.log ("Youre right! I've only visited 5!")
  alert("Youre right! I've only visited 5!");
} else {
  //console.log ("That's incorrect. I have only been to 5 countries so far.")
  alert("That's incorrect. I have only been to 5 countries so far.");
}

let correctAnswer;
correctAnswer = "21";
let attempts = 4;

while (attempts > 0) {
  let answer7 = prompt("Pick a number, any number!");
  if (correctAnswer === answer7) {
    console.log("You are correct!");
    alert("You are correct!");
    break;
  } else {
    console.log("You are incorrect.");
    alert("You are incorrect.");
    attempts = attempts - 1;
  }

  if (attempts === 0) {
    alert(
      "You are out of attempts! The correct answer is " + correctAnswer + "."
    );
  }
}

let favDes = ["dublin", "aruba", "chicago", "jamaica"];

let attempts2 = 6;

while (attempts2 > 0) {
  let question8 = prompt("What is my favorite destination?").toLowerCase();
  if (question8 === favDes[0]) {
    alert("You are correct!");
    break;
  } else if (question8 === favDes[1]) {
    alert("You are correct!");
    break;
  } else if (question8 === favDes[2]) {
    alert("You are correct!");
    break;
  } else if (question8 === favDes[3]) {
    alert("You are correct!");
    break;
  }

  alert("You are wrong.");
  attempts2 = attempts2 - 1;

  if (attempts2 === 0) {
    alert(
      `You are out of attempts.${favDes[0]}, ${favDes[1]}, ${favDes[2]}, ${favDes[3]}`
    );
    break;
  }
}
