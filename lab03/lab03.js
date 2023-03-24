/**
 * Write a function skip_add that takes a single argument n and computes
 * the sum of every other integer between 0 and n. Assume n is non-negative."
 */
const skipAdd = function (n) {
	if (n <= 0) {
		return 0;
	} else if (n == 1) {
		return 1;
	}

	return n + skipAdd(n - 2);
}

/**
 * First, pick a positive integer n as the start.
 * If n is even, divide it by 2.
 * If n is odd, multiply it by 3 and add 1.
 * Repeat this process until n is 1.
 * Write a recursive version of hailstone that prints out the values of the sequence
 * and returns the number of steps. 
 */
const hailstone = function (n, count=0){
	console.log(n);
	if (n == 1) {
		return count + 1;
	}
	if (n % 2 == 0) {
		return hailstone(n / 2, count + 1);
	} else {
		return hailstone((n * 3) + 1, count + 1);
	}
}

/**
 * Write a recursive implementation of summation, which takes a positive integer n
 * and a function term.
 * It applies term to every number from 1 to n including n
 * and returns the sum of the results.
 */
const summation = function (n, func) {
	if (n == 1) {
		return func(n);
	}
	return func(n) + summation(n - 1, func);
}

module.exports = {
	skipAdd,
	hailstone,
	summation
}
