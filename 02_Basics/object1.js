// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Tanishk",
  "full name": "Tanishk Varshney",
  [mySym]: "mykey of Symbol", // symbol define by [Square Brackets]
  age: 18,
  location: "Jaipur",
  email: "Tanishk@google.com",
  isLoggedIn: true,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "tanishk@chatgpt.com";
// Object.freeze(JsUser)    // to Fix the value of Object
JsUser.email = "tanishk@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
