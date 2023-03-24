const lab02 = require("./lab02.js");

test("Tests whether the returned function is a curried version of a two argument function FUNC", () => {
	const curried_add = lab02.lambda_curry2(lab02.add);
	const add_three = curried_add(3);
	expect(add_three(5)).toBe(8);

})


