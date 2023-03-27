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

module.exports = {
	flatten,
	flattenReduce
}
