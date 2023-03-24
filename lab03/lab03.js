/**
 * Write a function skip_add that takes a single argument n and computes
 * the sum of every other integer between 0 and n. Assume n is non-negative."
 */
const skipAdd = function (n) {
	if (n <= 0) {
		return 0
	} else if (n == 1) {
		return 1
	}

	return n + skipAdd(n - 2);
}

module.exports = {
	skipAdd
}
