
function Person(firstName, lastName) {
	this.firstName = firstName
	this.lastName = lastName
}

// using a plain function call, this will refer to the global object
// firstName and lastName will be created on the global object
const person = Person('Jane', 'Doe')
console.log(person)	// undefined

console.log(global.firstName) // Jane
console.log(global.lastName)	// Doe


