const formatString = (input: string, toUpper?: boolean): string => {
    if (toUpper === undefined || toUpper === true) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
};

interface Book {
    title: string;
    rating: number;
  }
  
  const filterByRating = function(books: Book[]): Book[] {
    const highestRatedBooks: Book[] = [];
    
    for (let i = 0; i < books.length; i++) {
      if (books[i].rating >= 4) {
        highestRatedBooks.push(books[i]);
      }
    }
    
    return highestRatedBooks;
  };
  
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
    
    for (let i = 0; i < arrays.length; i++) {
        const currentArray = arrays[i];
        for (let j = 0; j < currentArray.length; j++) {
            result.push(currentArray[j]);
        }
    }
    
    return result;
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
  }

  public getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
  }

  public getModel(): string {
      return `Model: ${this.model}`;
  }
}

const processValue = (value: string | number): number => {
  if (typeof value === 'string') {
      return value.length;
  } else {
      return value * 2;
  }
};

interface Product {
  name: string;
  price: number;
}

const getMostExpensiveProduct = (products: Product[]): Product | null => {
  if (products.length === 0) return null;
  
  let mostExpensive = products[0];
  
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensive.price) {
      mostExpensive = products[i];
    }
  }
  
  return mostExpensive;
};

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

const getDayType = (day: Day): string => {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
};

const squareAsync = async (n: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
};
