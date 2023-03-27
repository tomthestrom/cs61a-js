const treeADT = require("./functional_tree.js");
const tree = treeADT.tree;
const label = treeADT.label;
const isLeaf = treeADT.isLeaf;
const branches = treeADT.branches;

const flatten = function(lst) {
	
	let flattened = [];

	for (const element of lst) {
		if (Array.isArray(element)) {
					flattened = flattened.concat(flatten(element))
				} else {
					flattened.push(element);
				}
	}

	return flattened;
}

const flattenReduce = lst => lst.reduce((acc, element) => Array.isArray(element) ? acc.concat(flattenReduce(element)) : acc.concat(element), []);

const replaceLeaf = function(t, oldLabel, newLabel) {

			let treeLabel = label(t);

			if (isLeaf(t) && treeLabel == oldLabel) {
				treeLabel = newLabel;
			}

			let newBranch = branches(t)?.reduce((acc, branch) => acc.concat(replaceLeaf(branch, oldLabel, newLabel)), []);

			return tree(treeLabel, newBranch)
}

module.exports = {
	flatten,
	flattenReduce,
	replaceLeaf
}
