var basicCard = require("./basicCard.js")
var inquirer = require("inquirer");



var firstQ = new basicCard("Which president had a PHD?", "Woodrow Wilson")
var secQ = new basicCard("What are female elephants called?", "Cows")
var thirdQ = new basicCard("Which country has the one and only square flag?", "Switzerland")
var fourthQ = new basicCard("What is the only mammal that can fly?", "Bats")
var fifthQ = new basicCard("Which president lives in the White house first?", "John Adams")
var sixthQ = new basicCard("Which subject did Albert Einstein", "French")
var seventhQ = new basicCard("What is the largest internal organ in human body?", "Liver")
var eighthQ = new basicCard("What is the most common birthday?", "September 16th")
var ninethQ = new basicCard("How mant times can an ant lift its own weight?", "5000")
var tenthQ = new basicCard("What organ can regenerate itself?", "Liver")


var questions = [firstQ, secQ, thirdQ,  fourthQ, fifthQ, sixthQ, seventhQ, eighthQ, ninethQ, tenthQ]

var count = 0;

var askQuestions = function(){

	if (count < 10){
	inquirer.prompt([
		{
	    type: "input",
	    name: "answer",
	    message: questions[count].front,
		}
		]).then(function(qu){
			if (qu.answer === questions[count].back){
				console.log("Correct!")
			} else {
				console.log("Wrong! It's " + questions[count].back + ".")
			}
			count++;
			askQuestions();
		})
	}
};
askQuestions();