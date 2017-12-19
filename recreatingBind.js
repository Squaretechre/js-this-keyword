// return a new func that closes over the supplied receiver of this
Function.prototype.bind = function(thisArg, ...fixedArgs) {
	const func = this
	return function(...args) {
		return func.apply(thisArg, [...fixedArgs, ...args])
	}
}

const person = {
	firstName: 'John',
	sayHi() {
		console.log(`Hi, my name is ${this.firstName}!`)
	}
}

person.sayHi.bind(this)


