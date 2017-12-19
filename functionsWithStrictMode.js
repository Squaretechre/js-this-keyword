"use strict"

function Person(firstName, lastName) {
	this.firstName = firstName
	this.lastName = lastName
}

// without the new operator we get "Cannot set property 'firstName' of undefined"
// this is set to undefined in strict mode, this prevents us creating global variables
const person = new Person('Jane', 'Doe')
