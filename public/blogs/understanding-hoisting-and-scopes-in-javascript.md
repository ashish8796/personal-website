# Understanding Hoisting And Scopes In JavaScript


You’ve probably heard about the term “hoisting” and probably (if you program in JS) know that it exists.

But do you know how it works? Do you know why it works? Today we are going to explore a very important concept that confuses a lot of people, especially in the technical part of job interviews.

However, to talk about “hoisting”, we will need to go through some points such as “scope” and one of the differences between declaring variables with let, var and const.

Let’s go!

## How does hoisting work?

### Difference between scopes in JS

As mentioned, to understand what “hoisting” is and how it works, we need to understand what the JS execution scopes are.

Scopes are contexts where variables and functions are declared and accessed within the execution of our JavaScript code.

Basically, scopes are categorized into 4 types:

- Global scope
- Local scope
- Block scope
- Lexical scope

### Global scope

It is defined outside of any function or execution block (like if, for, etc).

A practical and simple example:

Let’s assume we have a .js file and in it we define a sayHello function:

```javascript
function sayHello(name) {
 console.log(`Hello, ${name}!`);
}

const name = 'Felipe';

sayHello(name); // Output: Hello, Felipe!
```

Here, both our sayHello function and the name variable can be accessed in any scope below it (either by block definition or even another function), example:


```javascript
function sayHello(name) {
 console.log(`Hello, ${name}!`);
}

const name = 'Felipe';
const CAN_SHOW_NAME = true;

function verifyName() {
 if (CAN_SHOW_NAME) {
  sayHello(name);
 }
}

verifyName(); // Output: Hello, Felipe!
```

Note that our variables created outside the verifyName function can be accessed within it because they are in the global scope.


### Local scope

The local scope is characterized by existing within the body of a function.

Using the same code above as an example, let’s assume that the declaration of the variable `CAN_SHOW_NAME` was created within the verifyName function:



```javascript

function sayHello(name) {
 console.log(`Hello, ${name}!`);
}

const name = 'Felipe';

function verifyName() {
 const CAN_SHOW_NAME = true;

 if (CAN_SHOW_NAME) {
  sayHello(name);
 }
}

verifyName(); // Output: Hello, Felipe!

```

Our return would still be the same, even though we moved the variable declaration into the function.

But what happens if we try to access the `CAN_SHOW_NAME` variable outside the function? Outside the local scope in what was it created?


```javascript

function sayHello(name) {
 console.log(`Hello, ${name}!`);
}

const name = 'Felipe';

function verifyName() {
 const CAN_SHOW_NAME = true;

 if (CAN_SHOW_NAME) {
  sayHello(name);
 }
}

console.log(CAN_SHOW_NAME); // ReferenceError: CAN_SHOW_NAME is not defined

```

We will receive a ReferenceError because the `CAN_SHOW_NAME` variable was only defined in the local scope of the verifyName function.


### Block scope


The name of this type of scope describes its behavior, they are scopes that have their limit established within a block, whether within a function, if, for, etc.

Example:

```javascript

if (true) {
 const name = 'Felipe';

 console.log(name); // Output: Felipe
}

```

The name variable is defined inside the ‘if’ block, so we cannot access it from outside the block:


```javascript

if (true) {
 const name = 'Felipe';

 console.log(name); // Output: Felipe
}

console.log(name); // ReferenceError: name is not defined

```

But… it is well noted that this behavior is only valid for let and const, the declaration of variables using var is not limited to the scope, therefore the same code but with the variable declaration being var will result in:

```javascript

if (true) {
 var name = 'Felipe';

 console.log(name); // Output: Felipe
}

console.log(name); // Output: Felipe


```

We will explore this in the future, but as a rule, it has become a convention to only use let and const for variable definition in JS.

### Lexical scope

Lexical scope (for sure) is the most difficult type of scope to understand in JS, but basically, it is the area of the code where a variable is accessible.

Variables declared in the global scope are accessible from any part of the code, while variables declared within a function can only be accessed within that function or functions nested within it.

In practice:

```javascript

function function1() {
 const name = 'Felipe';

 function function2() {
  console.log(name.toUpperCase());
 }

 function2();
}

function1(); // Output: FELIPE

```

This happens because when declaring the first function (function1), we create a local variable (name) with the defined scope and within this function, we declare and execute another function (function2) that only executes a console.log, and when trying to access the name variable within its own scope and notice that it does not exist, search the upper scope (lexical scope).


By rule:

- Variables declared in the global scope are accessible from any part of the code.
- Variables declared within a function can only be accessed within that function or functions nested within it (for let and const only, variables declared using var have global scope).
- Variables declared inside a nested function can access variables declared in the outer scope of the nested function.

### var, const and let

As mentioned previously, to clearly understand how hoisting works, we need, in addition to understanding the scopes, to understand some of the main differences between declaring variables using let, var and const, such as:


***var***

- Scope: **Global or block**.
- Assignment: **Updatable and reassignable**.
- Initialization: **Initialized with undefined unless explicitly initialized**.
- Hoisting: **Yes**.


***let***

- Scope: **Block**.
- Assignment: **Updatable but not reassignable**.
- Initialization: **Can be declared without being initialized, but must be initialized before being used**.
- Hoisting: **Yes**.


***const***

- Scope: **Block**.
- Attribution: **Not updatable or reassignable**.
- Initialization: **Must be initialized at the time of declaration**.
- Hoisting: **Yes**.


## What is hoisting and how does it work?

Now that we’ve seen scopes and the difference between variable declaration types, let’s apply all of this and understand hoisting.

In JavaScript, hoisting is an interpreter behavior that moves variable and function declarations to the top of the scope in which they were defined, even before the code is executed. This means that even if a variable or function is declared in the middle of a code block, it will already be available for use at the beginning of the block.

Hoisting is an important JavaScript behavior that can be used to improve code readability and maintainability.

For example, hoisting allows you to declare variables and functions anywhere in your code without worrying about the order in which they will be used (however, it is important to be aware of hoisting to avoid code errors. For example, if you try to assign a value to a variable before it is declared, the interpreter will assign the value undefined to the variable).

To better understand how hoisting works, it’s important to remember that JavaScript uses a single-line interpreter. This means that the interpreter reads the code line by line and executes it immediately. However, hoisting occurs during the compilation phase, before the code is executed.

During the compilation phase, the interpreter identifies all variable and function declarations in the code. The interpreter then moves these declarations to the top of the scope in which they were defined. This means that when the code is executed, the variables and functions will already be available for use.

Let’s see some examples:

```javascript

sayHello(); // Output: Hello!

function sayHello() {
  console.log('Hello!');
}

```

This code only works because the interpreter moves the function declaration to the top of the scope/block, making the sayHello function accessible in its scope.

Not convinced? Let’s look at some more examples:

```javascript

console.log(myName); // Output: undefinded
var myName = 'Felipe';

```

In this case, `undefined` is returned because, as we saw, hoisting only moves declarations to the top of execution, not initialization.

As we saw, only function and variable declarations are hoisted to the top of the execution block, and to demonstrate this, let’s assign a function to a variable and try to execute it:


```javascript

sayHello(); // TypeError: sayHello is not a function

var sayHello = function () {
  console.log('Hello!');
};

```

This happens because only the declaration is defined at the top of the scope, and not its assignment, therefore, at the beginning, the `sayHello` variable has the value undefined.


## Hoisting with var, let and const


As we have seen, hoisting is a fundamental and important concept in JavaScript, but we cannot fail to mention that it behaves differently depending on the keyword used in the declaration: `var`, `let` and `const`. Let's understand each one:

Hoisting with `var`:

- Variables declared with var are moved to the top of the scope (global or block) during the compilation phase.
- When accessing them before the declaration, they receive the default value of undefined.
- This can cause unexpected behavior and hard-to-find bugs.

Hoisting with `let` and `const`:

- Variables declared with let and const also suffer hoisting, but in a different way than var!
- They do not receive initial value during hoisting.
- Accessing them before the declaration results in an error: ReferenceError: Cannot access 'variable' before initialization.
- This is called Temporal Dead Zone (TDZ) and helps prevent bugs related to variable declarations.


## In summary
In summary, we saw a little about the types of scopes that exist in Javascript and how they interfere with hoisting, which is a behavior performed by the interpreter that is extremely important in order to prevent bugs, unexpected behaviors during development and understand the Javascript execution cycle. .

Personal recommendation: Always use let and const instead of var for greater predictability and to avoid bugs and declare variables at the beginning of the scope to avoid confusion with hoisting.

Thank you for staying here, I hope I helped. See you later.