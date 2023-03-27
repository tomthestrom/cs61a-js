const hw03 = require("./hw03.js");
const flatten = hw03.flatten;
const flattenReduce = hw03.flattenReduce;

test("Returns a flattened version of lst.", () => {
	expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
	expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
	expect(flatten([[1, [1, 1]], 1, [1, 1]])).toEqual([1, 1, 1, 1, 1, 1]);
	expect(flatten([[1, [1, 1]], 1, [1, 1]])).toEqual([1, 1, 1, 1, 1, 1]);
})

test("Returns a flattened version of lst. - Reduce one-liner", () => {
	expect(flattenReduce([1, 2, 3])).toEqual([1, 2, 3]);
	expect(flattenReduce([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
	expect(flattenReduce([[1, [1, 1]], 1, [1, 1]])).toEqual([1, 1, 1, 1, 1, 1]);
	expect(flattenReduce([[1, [1, 1]], 1, [1, 1]])).toEqual([1, 1, 1, 1, 1, 1]);
})

