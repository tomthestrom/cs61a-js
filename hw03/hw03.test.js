const hw03 = require("./hw03.js");
const treeADT = require("./functional_tree.js");

const flatten = hw03.flatten;
const flattenReduce = hw03.flattenReduce;

const tree = treeADT.tree;
const replaceLeaf = hw03.replaceLeaf;

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

const yggdrasil = tree('odin',
    [tree('balder',
    [tree('thor'),
    tree('freya')]),
    tree('frigg',
    [tree('thor')]),
    tree('thor',
    [tree('sif'),
    tree('thor')]),
    tree('thor')]);

const expected = tree('odin',
    [tree('balder',
    [tree('freya'),
    tree('freya')]),
    tree('frigg',
    [tree('freya')]),
    tree('thor',
    [tree('sif'),
    tree('freya')]),
    tree('freya')]);

test("", () => {
	expect(replaceLeaf(yggdrasil, 'thor', 'freya')).toEqual(expected);
})
