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

module.exports = {
	flatten
}
