const id = Symbol("1234");
const anotherid = Symbol("1234");
console.log(id); //Symbol(1234)
console.log(id === anotherid); //false

const score = 500.3;
console.log(typeof score); //number

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
