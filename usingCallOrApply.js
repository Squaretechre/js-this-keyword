function sayHi() {
	console.log(`Hi, my name is ${this.firstName}!`)
}

const person = {
	firstName: 'Jane',
	lastName: 'Doe'
}

const otherPerson = {
	firstName: 'John',
	lastName: 'Doe'
}

// can use call method to invoke method with specific object as receiver of this
// call is defined on the function prototype and is available on every function
sayHi.call(person) 			// Hi, my name is Jane!​​​​​
sayHi.call(otherPerson)	// Hi, my name is John!

// can also use apply
sayHi.apply(person)			// ​​​​​Hi, my name is Jane!​​​​​

// difference between call and apply
// call and apply accept arguments in a slightly different way

// (c)all => (c)omma seperated list of arguments
// (a)pply => (a)rray of arguments


const numbers = [10, 20, 30, 40, 50]

// a regular method call is syntactic sugar for...
const slice1 = numbers.slice(1, 4)

const slice2 = numbers.slice.call(numbers, 1, 4)
const slice3 = numbers.slice.apply(numbers, [1, 4])

console.log(slice1)	// [20, 30, 40]
console.log(slice2)	// [20, 30, 40]
console.log(slice3)	// [20, 30, 40]


// outside of strict mode passing null or undefined as the thisArg will use the global object
function func() {
	console.log(this === global)
}

func.call(null)				// true
func.call(undefined)	// true

func.apply(null)			// true
func.apply(undefined)	// true