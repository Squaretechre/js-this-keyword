const outerThis = this;

// an arrow function does not have it's own this
// it uses this from it's enclosing execution context
const func = () => {
	console.log(this === outerThis) // true
}

func()

// the this binding of an arrow function can't be set explicitly
// it can not be set with apply, bind or call

// an arrow function's this this argument will always refer to the this value captured when it was created 
func.call(null)
func.apply(undefined)
func.bind({})()

// arrow function transparent this binding is particularly useful for callbacks

const counter = {
	count: 0,
	incrementPeriodically() {
		setInterval(function() {
				// this refers to global object 
				console.log(++this.count)
		}, 1000)
	}
}

counter.incrementPeriodically()


const counter2 = {
	count: 0,
	incrementPeriodically() {
		setInterval(() => {
				// callback now uses this binding from incrementPeriodically
				console.log(++this.count)
		}, 1000)
	}
}

counter2.incrementPeriodically()
