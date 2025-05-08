"use strict";
const formatString = (input, toUpper) => {
    if (toUpper === undefined || toUpper === true) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
};
const filterByRating = function (books) {
    const highestRatedBooks = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].rating >= 4) {
            highestRatedBooks.push(books[i]);
        }
    }
    return highestRatedBooks;
};
function concatenateArrays(...arrays) {
    const result = [];
    for (let i = 0; i < arrays.length; i++) {
        const currentArray = arrays[i];
        for (let j = 0; j < currentArray.length; j++) {
            result.push(currentArray[j]);
        }
    }
    return result;
}
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
const processValue = (value) => {
    if (typeof value === 'string') {
        return value.length;
    }
    else {
        return value * 2;
    }
};
const getMostExpensiveProduct = (products) => {
    if (products.length === 0)
        return null;
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
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
const getDayType = (day) => {
    switch (day) {
        case Day.Saturday:
        case Day.Sunday:
            return "Weekend";
        default:
            return "Weekday";
    }
};
const squareAsync = async (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            }
            else {
                resolve(n * n);
            }
        }, 1000);
    });
};
// Positive case
squareAsync(4)
    .then(console.log) // Output after 1s: 16
    .catch(console.error);
// Negative case
squareAsync(-3)
    .then(console.log)
    .catch(console.error); // Output: Error: Negative number not allowed
