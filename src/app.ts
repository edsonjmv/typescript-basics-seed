interface Sizes {
  sizes: string[];
}

interface Pizza extends Sizes {
  name: string;
  getAvailableSizes(): string[];
}

interface Pizzas {
  data: Pizza[];
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    }
  };
}

pizza = createPizza('Pepperoni', ['small', 'medium']);