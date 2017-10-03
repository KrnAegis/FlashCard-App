var clozeCard = require("./Clozemoduel.js")
var inquirer = require("inquirer");



var firstQ = new clozeCard("President Woodrow Wilson had a PHD.", "Woodrow Wilson")
var secQ = new clozeCard("Female elephants are called Cows.", "Cows")
var thirdQ = new clozeCard("Switzerland has the one and only square flag.", "Switzerland")
var fourthQ = new clozeCard("Bats are the only mammal that can fly.", "Bats")
var fifthQ = new clozeCard("President John Adams lived in the White house first.", "John Adams")
var sixthQ = new clozeCard("Albert Einstein failed French in school", "French")
var seventhQ = new clozeCard("Liver is the largest internal organ in human body.", "Liver")
var eighthQ = new clozeCard("September 16th is the most common birthday.", "September 16th")
var ninethQ = new clozeCard("Ants can lift 5000 times its own weight.", "5000")
var tenthQ = new clozeCard("Liver is the only organ that can regenerate itself.", "Liver")


var questions = [firstQ, secQ, thirdQ,  fourthQ, fifthQ, sixthQ, seventhQ, eighthQ, ninethQ, tenthQ]

var count = 0;

var askQuestions = function(){

	if (count < 10){
	inquirer.prompt([
		{
	    type: "input",
	    name: "answer",
	    message: questions[count].partial,
		}
		]).then(function(qu){
			if (qu.answer === questions[count].cloze){
				console.log("Correct! 	" + questions[count].full)
			} else {
				console.log("Wrong! " + questions[count].full)
			}
			count++;
			askQuestions();
		})
	}
};
askQuestions();