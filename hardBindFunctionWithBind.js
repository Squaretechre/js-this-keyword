const person = {
	firstName: 'John',
	sayHi() {
		console.log(`Hi, my name is ${this.firstName}!`)
	}
}

// passing a reference to a function looses the intended receiver of this
setTimeout(person.sayHi, 1000) // ​​​​​Hi, my name is undefined!​​​​​

// can use bind to create a new sayHi function which permanently sets it's this value to person
// referred to as hard binding
setTimeout(person.sayHi.bind(person), 1000) // Hi, my name is John!

// still works if function is extracted to a variable, this is bound to person
const greet = person.sayHi.bind(person)
greet() // Hi, my name is John!​​​​

// once a function is bound it's this argument can no longer be changed, not even by call or apply
const otherPerson = {
	firstName: 'Jane'
}

greet.call(otherPerson) // Hi, my name is John!​​​​​