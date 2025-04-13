import commonWords from "common-words";

export let keys = [
	["Q", "n"],
	["W", "n"],
	["E", "n"],
	["R", "n"],
	["T", "n"],
	["Y", "n"],
	["U", "n"],
	["I", "n"],
	["O", "n"],
	["P", "n"],
	["A", "n"],
	["S", "n"],
	["D", "n"],
	["F", "n"],
	["G", "n"],
	["H", "n"],
	["J", "n"],
	["K", "n"],
	["L", "n"],
	["⇦", "o"],
	["Z", "n"],
	["X", "n"],
	["C", "n"],
	["V", "n"],
	["B", "n"],
	["N", "n"],
	["M", "n"],
	["↵", "o"],
];

export let words = [
	[
		["R", "c"],
		["A", "d"],
		["D", "w"],
		["I", "w"],
		["O", "w"],
	],
	[
		["T", "w"],
		["E", "w"],
		["S", "w"],
		["T", "w"],
		["S", "w"],
	],
	[
		["P", "w"],
		["L", "w"],
		["A", "d"],
		["N", "w"],
		["E", "w"],
	],
	[
		["C", "w"],
		["O", "w"],
		["D", "w"],
		["E", "w"],
		["S", "w"],
	],
	[
		["H", "w"],
		["E", "w"],
		["L", "w"],
		["L", "w"],
		["O", "w"],
	],
	[
		["G", "w"],
		["A", "d"],
		["M", "w"],
		["E", "w"],
		["S", "w"],
	],
	[
		["F", "w"],
		["A", "c"],
		["C", "w"],
		["T", "w"],
		["S", "w"],
	],
	[
		["R", "c"],
		["A", "c"],
		["D", "c"],
		["I", "c"],
		["O", "c"],
	],
];

export let CurrentWord = [];

export function ButtonPressed(key) {
    CurrentWord.push(key);

}

function getRandomWord() {
	let fiveLetterWords = commonWords
		.map((entry) => entry.word)
		.filter((word) => word.length === 5);

	return fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
}
