const lab05 = require("./lab05.js");
const merge = lab05.merge;
const addChars = lab05.addChars;

test("Merges two sorted lists", () => {
	expect(merge([1], [2])).toEqual([1, 2]);
	expect(merge([2], [1])).toEqual([1, 2]);
	expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
	expect(merge([5, 7], [2, 4, 6])).toEqual([2, 4, 5, 6, 7]);
})


test("Return a string containing the characters you need to add to w1 to get w2. You may assume that w1 is a subsequence of w2.", () => {
	expect(addChars("owl", "howl")).toBe("h");
	expect(addChars("want", "wanton")).toBe("on");
	expect(addChars("rat", "radiate")).toBe("diae");
	expect(addChars("a", "prepare")).toBe("prepre");
	expect(addChars("resin", "recursion")).toBe("curo");
	expect(addChars("fin", "effusion")).toBe("efuso");
	expect(addChars("coy", "cacophony")).toBe("acphon");
})
