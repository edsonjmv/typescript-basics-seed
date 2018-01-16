let pizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
  pizzaSize = size;
}

selectSize('large');

console.log(`Pizza size: ${pizzaSize}`);

let pizzaSize2: number = 1;

function selectSize2(size: 1 | 2 | 3): void {
  pizzaSize2 = size;
}

selectSize2(2);

console.log(`Pizza size 2: ${pizzaSize2}`);