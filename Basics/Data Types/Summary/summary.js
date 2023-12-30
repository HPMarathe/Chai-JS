const id = Symbol("1234");
const anotherid = Symbol("1234");
console.log(id); //Symbol(1234)
console.log(id === anotherid); //false

const score = 500.3;
console.log(typeof score); //number

const bigNumber = 3456543576654356754n;
console.log(typeof bigNumber); //bigint
const arr = ["ram", "shyam", "viram"];
console.log(arr);
console.log(typeof arr); //object

const myObj = {
  name: "hrushi",
  age: "19",
};
console.log(myObj);
console.log(typeof myObj);

const someFun = function () {
  console.log("first");
};

console.log(typeof someFun); //function(function object)

let myName = "hrushikesh";
let yourName = myName;
yourName = "Marathe";

console.log(myName);
console.log(yourName);

let userOne = {
  name: "hrushikesh",
  email: "hrushi@gmail.com",
};

let userTwo = userOne;

userTwo.email = "hrushi@atlassian.com";

console.log(userOne);
