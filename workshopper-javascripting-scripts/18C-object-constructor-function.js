/*
Sometimes we need a "blueprint" for creating many objects of the same "type".
The way to create an "object type", is to use an 'object constructor function'.

? Objects of the same type are created by calling the constructor function with the 'new' keyword:
! It is considered good practice to name constructor functions with an upper-case first letter.
*/
function Product(name, price) {
    this.name = name;
    this.price = price;
}
function Food(name, price) {
    console.log(new Product(name, price));
    // Product.call(this, name, price);
    console.log(this.category);
    this.category = 'food';
    return 5;
}
const x = new Food('cheese', 5);
console.log(x);
// expected output: "cheese"
const y = new Food('milk', 15);
console.log("hello");
console.log(y);
