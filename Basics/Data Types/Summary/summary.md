### Data types

Primitive (Call by Value)

- 7 Types : String,Number,Bigint,Boolean,null,undefined,Symbol

Non Primitive (call by reference)

- Array, object, Functions

### Call By Value

- There are two copies of parameters stored in different memory locations.
- One is the original copy and the other is the function copy.
- Any changes made inside functions are not reflected in the actual parameters of the caller.

### Call by Reference

- Both the actual and formal parameters refer to the same locations.
- Any changes made inside the function are actually reflected in the actual parameters of the caller.

https://www.geeksforgeeks.org/difference-between-call-by-value-and-call-by-reference/

## Typed languages

Type checking is the process of verifying and enforcing the constraints of types.

**Javascript is a dynamically typed language.**

### Statically typed languages

- Type checking at compile-time.
- Examples: Java, C, C++,Typescript.

### Dynamically typed languages

- Type checking at run-time.
- Examples: Perl, Ruby, Python, PHP, JavaScript.

https://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages

### Type of Operator Results

https://262.ecma-international.org/5.1/#sec-11.4.3

### Stack vs Heap Memory

![image](https://github.com/HPMarathe/Chai-and-JS/assets/105854654/da191a96-1fad-489c-b52b-e7ad2f14b7b3)

- Primitive data types store value in Stack.

```js
let myName = "hrushikesh";
let yourName = myName;
yourName = "Marathe";

console.log(myName); // "hrushikesh";
console.log(yourName); //Marathe
```

- Non-Primitive data types store value in heap.

```js
let userOne = {
  name: "hrushikesh",
  email: "hrushi@gmail.com",
};

let userTwo = userOne;

userTwo.email = "hrushi@atlassian.com";

console.log(userOne);
// { name: 'hrushikesh', email: 'hrushi@atlassian.com' }
```
