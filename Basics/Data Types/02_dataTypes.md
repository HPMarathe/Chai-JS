### Basics

- "use strict" - This treats all js code as a new version

### ECMASCRIPT

- Before ecmascript for every browser there are different standards for js.
- ECMASCRIPT is created for maintaining a standard in js.
- In this docs they created rules,priority algos etc.
- https://ecma-international.org/publications-and-standards/standards/ecma-262/

## Data Types

Total 8 data types are there

- Primitive - number,bigint,string,boolean,null,undefined,symbol
- Non Primitive - object

```js
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique
```

## Typeof

```js
console.log(typeof undefined); // undefined

console.log(typeof null); // object
```

## Conversion

- For Number

```js
let score = "333";

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
```

- For String

```js
let someNumber = 33;

let stringNumber = String(someNumber);
```

- For Boolean

```js
let isLoggedIn = Hrushi;

let booleanIsLoggedIn = Boolean(isLoggedIn);
```

## Operations

```js
let value = 3;
let negValue = -value;
console.log(negValue); //-3

console.log(2 + 2); //4
console.log(2 - 2); //0
console.log(2 * 2); //4
console.log(2 ** 3); //8
console.log(2 / 3);
console.log(2 % 3);

let str1 = "hello";
let str2 = " hrushi";

let str3 = str1 + str2;
// console.log(str3); hello hrushi

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

// console.log( (3 + 4) * 5 % 3);

console.log(+true); //+1
console.log(+""); // 0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);
```

link to study

https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
