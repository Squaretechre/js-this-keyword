class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}

	sayHi() {
		console.log(`Hi, my name is ${this.firstName}!`)
	}
}

// this refers to newly created instance of the Person class
const person = new Person('John', 'Doe')

// sayHi invoked as a method with person as the receiver
person.sayHi()

// storing a reference to the sayHi function looses the receiver
// the this argument in sayHi is now set to undefined
// class bodies are implicitly in strict mode
const greet = person.sayHi
// greet()

// could use bind to tie sayHi to person
const greet2 = person.sayHi.bind(person)
greet2()

// or, bind the this reference in the constructor of a class
class OtherPersonType {
		constructor(firstName, lastName) {
			this.firstName = firstName
			this.lastName = lastName

			this.sayHi = this.sayHi.bind(this)
		}

		sayHi() {
			console.log(`Hi, my name is ${this.firstName}!`)
		}
}

var person2 = new OtherPersonType('Jane', 'Doe')
person2.sayHi()

// or use a class field and an arrow function
class AwesomePerson {
	sayHi = () => {
		console.log(`Hi, my name is ${this.firstName}!`)
	}

	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}
}