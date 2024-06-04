const number = 1234
let name = "Tanishk"  // generally we use let keyword
var surname = "Varshney"  //it legacy use
city =  "Chandausi"  // it's not good

// number = 8767564  //Not Allowed
name = "Prince" 
surname = "Gupta"
city = "Roorkee"

console.log(number)
console.log(name)
console.log(surname)
console.log(city)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([number,name,surname,city])