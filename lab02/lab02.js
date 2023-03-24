const add = (a, b) => a + b

const lambda_curry2 = func => a => b => func(a, b)

module.exports =  {
	add,
	lambda_curry2
}
