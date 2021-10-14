const a = [1, 2, 3, 4, 5];

// const b = a.splice(1, 4);
// console.log(b);

a.splice(0, 0, a.splice(1, 1)[0]);
console.log(a);
