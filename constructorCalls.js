
function Person(firstName, lastName) {
	// the Person functions name is written to the console output
	// this shows that the this binding is linked to 
	console.log(this)	// Person {}
	this.firstName = firstName
	console.log(this) // Person { firstName: 'Jane' }
	this.lastName = lastName
	console.log(this)	// Person { firstName: 'Jane', lastName: 'Doe' }

	// new object is implicitly returned
	// although this could be written explicitly as
	return this
}

// a function call with the new operator infront of it turns it into a constructor call
// when functions are invoked as constructor calls a new object is created and is set as the this binding for that call
const person = new Person('Jane', 'Doe')

console.log(person)