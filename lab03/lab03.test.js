const lab03 = require("./lab03.js");
const skipAdd = lab03.skipAdd;

test("Skip Add - Takes a number x and returns x + x-2 + x-4 + x-6 + ... + 0", () => {
	expect(skipAdd(5)).toBe(9);
	expect(skipAdd(10)).toBe(30);
})
