let sumOrder: (price: number, quantity?: number) => number;

/*
sumOrder = (x, y) => {
  if (y) {
    return x * y
  }
  return x;
};
*/

sumOrder = (x, y) => y ? x * y : x;

const sum = sumOrder(25);

console.log(`Total sum: ${sum}`);

const sum2 = sumOrder(25, 2);

console.log(`Total sum: ${sum2}`);