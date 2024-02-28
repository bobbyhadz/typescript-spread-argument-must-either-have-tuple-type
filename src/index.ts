export {};

// A spread argument must either have a tuple type or be passed to a rest parameter

// EXAMPLE 1 - Use a const assertion to solve the error

function getObj(name: string, age: number) {
  return {
    name,
    age,
  };
}

const result = getObj(...(['Bobby Hadz', 30] as const));
console.log(result);

// ---------------------------------------------------

// // EXAMPLE 2 - Type the array as a tuple to solve the error

// function getObj(name: string, age: number) {
//   return {
//     name,
//     age,
//   };
// }

// // 👇️ declare tuple instead of array
// const myTuple: [string, number] = ['Bobby Hadz', 30];

// const result = getObj(...myTuple);

// console.log(result); // 👉️ { name: 'Bobby Hadz', age: 30 }

// ---------------------------------------------------

// // EXAMPLE 3 - Using rest parameters to solve the error

// function getArr(...args: string[]) {
//   return args;
// }

// const result = getArr(...['James', 'Alice', 'Bobby Hadz', 'Carl']);

// console.log(result); // 👉️ ['James', 'Alice', 'Bobby Hadz', 'Carl']
