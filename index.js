// when ran in the browser in the global execution context, this = window
// when ran in node a node REPL in the global execution context, this = global
// when inside a node module in the global execution context, this = module.exports

"use strict"

// when not in strict mode, a plain function call sets the this value to global object
// when in strict mode, a plain function call sets the this value to undefined
// this applies to the function being invoked, not the call site
// consequences if you're using strict mode but invoke function in a 3rd party that is not
function func() {
	console.log(this === undefined)
}

func()