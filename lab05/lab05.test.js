const lab05 = require("./lab05.js");
const merge = lab05.merge;

test("Merges two sorted lists", () => {
	expect(merge([1], [2])).toEqual([1, 2]);
	expect(merge([2], [1])).toEqual([1, 2]);
	expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
	expect(merge([5, 7], [2, 4, 6])).toEqual([2, 4, 5, 6, 7]);
})
