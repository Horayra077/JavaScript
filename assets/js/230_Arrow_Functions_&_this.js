const person = {
    firstName: 'Dead',
    lastName: 'Inside',
    fullName: () => {
        // console.log(this) // print full window
        return `${this.firstName} ${this.lastName}` // undefined
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this); // insted of full window print full object
            console.log(this.fullName()) // undefined
        }, 3000)
    }
}

console.log(person.fullName())
console.log('/---------------------------------/')
console.log(person.shoutName())