'use strict'
let username = prompt("What is your name?")
alert("Hello " + username + "!")

let answer1 = prompt("Am I from Georgia?").toLowerCase()

if (answer1 === "yes" || answer1 === "y") {
     console.log ("No, Im actually from Tennessee!")
} else { 
// console.log ("You're right! I am from Tennessee")
alert("You're right! I am from Tennessee!")
}
let answer2 = prompt("Did I go to Fisk University") .toLowerCase()

if (answer2 === "yes" || "y") {
   //  console.log ("I did attend Fisk University! Go Bulldogs!")
     alert("I did attend Fisk University! Go Bulldogs!")
}

let answer3 = prompt("Have I worked as a farmer?").toLowerCase()

if (answer3 = "no"|| "n") {
   //  console.log ("No, but I love farm life!")
   alert("You're right! However, I do love farm life!")

}
let answer4 = prompt("Am I Nigerian?").toLowerCase()

if (answer4 = "yes"|| "y") {
   //console.log ("I've never been, but Naija no dey carry last!!")
   alert("I've never been, but Naija no dey carry last!!")
}