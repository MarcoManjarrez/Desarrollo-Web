console.log("Hello world!");

/*const fs = require('fs');

fs.readFile("input.txt", "utf-8", (err, fd) => {
	if (err) {
		console.log("Error: "+err);
	} else {
		console.log("The file says: \n" + fd);
	}
});*/

/*const sw = require('star-wars-quotes');
console.log(sw());*/

/*
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}*/

/*
const superheroes = require('superheroes');
var superhero = superheroes.random();

const supervillains = require('supervillains');
var supervillain = supervillains.random();

var life_hero = 1;
var life_villian = 1;

var direct = getRandomInt(1,4);
console.log(direct);
switch (direct){
	case 1:
		console.log("BLAM - To " + superhero);
		life_hero--;
		break;
	case 2:
		console.log("KAPOW - To " + supervillain);
		life_villian--;
		break;
	case 3:
		console.log("PUM - To BOTH");
		life_villian--;
		life_hero--;
		break;
}

if (life_hero === 0 && life_villian === 0) {
	console.log("TIE!");
}
else if (life_hero === 0) {
	console.log(supervillain + " WINS!");
}
else if (life_villian === 0) {
	console.log(superhero + " WINS!");
}

/*console.log("\n\n");

fs.readFile("input.txt", "utf-8", function(err, fd) {
	if (err) {
		console.log("Error: "+err);
	} else {
		console.log("The file says: \n" + fd);
	}
});*/

/*console.log("\n\n");

function readHandler(err, fd) {
	if (err) {
		console.log("Error: "+err);
	} else {
		console.log("The file says: \n" + fd);
	}
}

fs.readFile("input.txt", "utf-8", readHandler);*/

const superheroes = require("superheroes");

const supervillains = require("supervillains");

var superhero = superheroes.random();

var supervillain = supervillains.random();

console.log("- Look it is " + supervillain + " ready to do its evil deeds!\n- Who could save us!\n- Fear not! Here is " + superhero + " to the rescue!");