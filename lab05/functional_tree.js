// Tree ADT
const tree = function(label, branches=[]) {
    /*"""Construct a tree with the given label value and a list of branches."""*/
    return [label].concat([branches]);
}

const label = function(tree) {
    /* """Return the label value of a tree.""" */
    return tree[0]
}

const branches = function (tree) {
    /*"""Return the list of branches of the given tree."""*/
    return tree.splice(1);
}

const isLeaf = function(tree) {
    /*
    """Returns True if the given tree's list of branches is empty, and False
    otherwise.
    """*/
    return !branches(tree)
}

module.exports = {
        tree: tree,
        label: label,
        branches: branches,
        isLeaf: isLeaf
}

