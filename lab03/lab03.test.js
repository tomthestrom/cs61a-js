const lab03 = require("./lab03.js");
const skipAdd = lab03.skipAdd;
const hailstone = lab03.hailstone;
const summation = lab03.summation;

test("Skip Add - Takes a number x and returns x + x-2 + x-4 + x-6 + ... + 0", () => {
	expect(skipAdd(5)).toBe(9);
	expect(skipAdd(10)).toBe(30);
})


test("Print out the hailstone sequence starting at n, and return the number of elements in the sequence.", () => {
	expect(hailstone(10)).toBe(7);
})

test("Return the sum of the first n terms in the sequence defined by term.", () => {
	expect(summation(5, x => x * x * x)).toBe(225);
	expect(summation(9, x => x + 1)).toBe(54);
	expect(summation(5, x => 2 ** x)).toBe(62);
})
