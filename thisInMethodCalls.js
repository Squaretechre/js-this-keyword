const person = {
	firstName: 'John',
	sayHi() {
		console.log(`Hi, my name is ${this.firstName}!`)
	}
}

// when function is called as method of an object
// that functions this binding is set to the object the method was called on
person.sayHi()	// this = person, person is the receiver of the method call

// when the callsite is a property chain, such as:
// foo.bar.person.sayHi()
// the receiver is the most immediate property before the method

// store a reference to the sayHi function in greet
const greet = person.sayHi

// then calling greet results in sayHi loosing it's intended receiver
greet()	// Hi, my name is undefined!​​​​​

// this can happen when passing callbacks, i.e:
setTimeout(person.sayHi, 1000)	// setTimeout will call sayHi with this set to global object

// one solution, wrap callback in a function and invoke it so it keeps intended recevier
setTimeout(function() {
	person.sayHi()	// Hi, my name is John!​​​​​ 
}, 1000)

// or use bind to tie this to a specific object
setTimeout(person.sayHi.bind(person), 1000)	// Hi, my name is John!​​​​​