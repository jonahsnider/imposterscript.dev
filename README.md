# ImposterScript

ImposterScript is a subset of JavaScript which uses the **ඞ** character for all variable names.

[**Convert your code using our interactive REPL now!**](https://imposterscript.dev/)

## Example

If you passed in this code:

```js
// add two numbers
function sum(a, b) {
  return a + b;
}

const array = [ 1, 2, 3, 4 ];

console.log(array.reduce(sum, 0));
```

You would get this output:

```js
// add two numbers
function ඞ(ඞ, ඞඞ) {
  return ඞ + ඞඞ;
}

const ඞඞ = [ 1, 2, 3, 4 ];

console.log(ඞඞ.reduce(ඞ, 0));
```

**ImposterScript is a subset of JavaScript, that means you can run that code in any JS runtime (Node, browser, etc).**

## How it works

This is a fork of Terser's REPL which is more oriented towards making your code look stupid rather than minifying it.

It uses [a fork of Terser itself](https://www.npmjs.com/package/@jonahsnider/amongus-terser) which alters the variable mangling logic for considerably funnier output.
