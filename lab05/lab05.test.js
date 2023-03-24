const lab05 = require("./lab05.js");
const treeADT = require("./functional_tree.js");
const tree = treeADT.tree;
const merge = lab05.merge;
const addChars = lab05.addChars;
const acornFinder = lab05.acornFinder;

test("Merges two sorted lists", () => {
	expect(merge([1], [2])).toEqual([1, 2]);
	expect(merge([2], [1])).toEqual([1, 2]);
	expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
	expect(merge([5, 7], [2, 4, 6])).toEqual([2, 4, 5, 6, 7]);
});


test("Return a string containing the characters you need to add to w1 to get w2. You may assume that w1 is a subsequence of w2.", () => {
	expect(addChars("owl", "howl")).toBe("h");
	expect(addChars("want", "wanton")).toBe("on");
	expect(addChars("rat", "radiate")).toBe("diae");
	expect(addChars("a", "prepare")).toBe("prepre");
	expect(addChars("resin", "recursion")).toBe("curo");
	expect(addChars("fin", "effusion")).toBe("efuso");
	expect(addChars("coy", "cacophony")).toBe("acphon");
});


const scrat = tree('acorn');
const sproul = tree('roots', [tree('branch1', [tree('leaf'), tree('acorn')]), tree('branch2')])
const numbers = tree(1, [tree(2), tree(3, [tree(4), tree(5)]), tree(6, [tree(7)])]);
const t = tree(1, [tree('acorn',[tree('not acorn')])]);

test("Returns True if t contains a node with the value 'acorn' and False otherwise.", () => {
	expect(acornFinder(scrat)).toEqual(true);
	expect(acornFinder(sproul)).toEqual(true);
	expect(acornFinder(numbers)).toEqual(false);
	expect(acornFinder(t)).toEqual(true);
});
