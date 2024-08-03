const user = {
    username: "Tanishk",
    price: 6999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Varshney"
// user.welcomeMessage()

// console.log(this);

// function arrow(){
//     let username = "Tanishk"
//     console.log(this.username);
// }

// arrow()

// const arrow = function () {
//     let username = "Tanishk"
//     console.log(this.username);
// }

const arrow =  () => {
    let username = "Tanishk"
    console.log(this);
}


// arrow()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Tanishk"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()