// Магазин

import { Client } from './Client.js';
import { Product } from './Product.js';
import { Shop } from './Shop.js';

let danylo = new Client(1, 'Danylo', 'Varlyhin');
let yaroslav = new Client(2, 'Yaroslav', 'Isaenkov');

let potato1 = new Product(1, 'Potato', 'Vegetables', 7);
let potato2 = new Product(2, 'Potato', 'Vegetables', 7);
let potato3 = new Product(3, 'Potato', 'Vegetables', 7);

let tomato1 = new Product(4, 'Tomato', 'Vegetables', 19);
let tomato2 = new Product(5, 'Tomato', 'Vegetables', 19);
let tomato3 = new Product(6, 'Tomato', 'Vegetables', 19);
let tomato4 = new Product(7, 'Tomato', 'Vegetables', 19);
let tomato5 = new Product(8, 'Tomato', 'Vegetables', 19);

let apple1 = new Product(9, 'Apple', 'Fruits', 20);
let apple2 = new Product(10, 'Apple', 'Fruits', 20);

let banana1 = new Product(11, 'Banana', 'Fruits', 25);
let banana2 = new Product(12, 'Banana', 'Fruits', 25);
let banana3 = new Product(13, 'Banana', 'Fruits', 25);
let banana4 = new Product(14, 'Banana', 'Fruits', 25);

let shop = new Shop();

shop.addClient(danylo);
shop.addClient(yaroslav);

shop.addProduct(potato1);
shop.addProduct(potato2);
shop.addProduct(potato3);

shop.addProduct(tomato1);
shop.addProduct(tomato2);
shop.addProduct(tomato3);
shop.addProduct(tomato4);
shop.addProduct(tomato5);

shop.addProduct(apple1);
shop.addProduct(apple2);

shop.addProduct(banana1);
shop.addProduct(banana2);
shop.addProduct(banana3);
shop.addProduct(banana4);

shop.sellProduct(danylo, 'Banana', 4);
shop.sellProduct(danylo, 'Apple', 2);

console.log(shop.purchasedProductsCount());
console.log(shop.earnedMoney());
console.log(shop.productsCount());
console.log(shop.productsCountByType());
console.log(shop.purchasedSumByType());
console.log(shop.countClientProducts(danylo));

console.log(shop.clients);
console.log(shop.products);
console.log(shop.purchases);

