'use strict'
let username = prompt("What is your name?")
alert("Hello " + username + "!")

let answer1 = prompt("Am I from Georgia?").toLowerCase()

if (answer1 === "yes" || answer1 === "y") {
     console.log ("No, Im actually from Tennessee!")
} else { 
// console.log ("You're right! I am from Tennessee")
alert("You're right! I am from Tennessee")
}
let answer2 = prompt("Did I go to Fisk University") .toLowerCase()

if (answer2 === "yes" || "y") {
     console.log ("I did attend Fisk University! Go Buldogs!")
     alert("I did attend Fisk University! Go Buldogs!")
}