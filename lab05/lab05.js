const treeADT = require("./functional_tree.js");
const tree = treeADT.tree;
const branches = treeADT.branches;
const isLeaf = treeADT.isLeaf;

const merge = function(lst1, lst2) {
	if (lst1.length == 0) {
			return lst2;
	} else if(lst2.length == 0) {
			return lst1;
	}

	if (lst1[0] < lst2[0]) {
		return [lst1[0]].concat(merge(lst1.slice(1), lst2))
	}

	return [lst2[0]].concat(merge(lst1, lst2.slice(1)))
}

const addChars = function(w1, w2) {
	//base cases
	if (w1 == w2) {
		return ''
	} else if (w1.length == 0) {
		return w2
	}

	if (w1[0] == w2[0]) {
		return addChars(w1.slice(1), w2.slice(1));
	} else {
		return w2[0] + addChars(w1, w2.slice(1));
	}
}

const acornFinder = function(t) {
	isAcorn = treeADT.label(t) == "acorn";

	if (isLeaf(t)) {
		return isAcorn;
	}

	for (const branch of branches(t)) {
			isAcorn = isAcorn || acornFinder(branch);
		}

	return isAcorn
}

module.exports = {
	merge,
	addChars,
	acornFinder
}
