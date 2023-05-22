import { getFileData, runTest } from "../../../utilities";

import type { Test } from "../../../types/test";

const input = getFileData("./questions/2015/01/input.txt");

// ( === up
// ) === down

const test: Test[] = [
	{ case: "(())", answer: 0 },
	{ case: "()()", answer: 0 },
	{ case: "(((", answer: 3 },
	{ case: "(()(()(", answer: 3 },
	{ case: "))(((((", answer: 3 },
	{ case: "())", answer: -1 },
	{ case: "))(", answer: -1 },
	{ case: ")))", answer: -3 },
	{ case: ")())())", answer: -3 },
];

const getDirections = (data: string) => {
	const totalFloors = data.length;
	const totalUp = data.split(")").join("").length;
	const totalDown = totalFloors - totalUp;
	const floor = 0 + totalUp - totalDown;

	// console.log(`Total Floors: ${totalFloors}`);
	// console.log(`Total Steps Up: ${totalUp}`);
	// console.log(`Total Steps Down: ${totalDown}`);
	// console.log(`Floor ${floor}`);

	return floor;
};

runTest(test, getDirections);

console.log(getDirections(input));
