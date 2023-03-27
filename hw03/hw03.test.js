const hw03 = require("./hw03.js");
const flatten = hw03.flatten;

test("Returns a flattened version of lst.", () => {
	expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
	expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
	expect(flatten([[1, [1, 1]], 1, [1, 1]])).toEqual([1, 1, 1, 1, 1, 1]);
	expect(flatten([[1, [1, 1]], 1, [1, 1]])).toEqual([1, 1, 1, 1, 1, 1]);
})

