// Магазин

const Product = function (name, type, cost) {
    this.name = name;
    this.type = type;
    this.cost = cost;
}

const Client = function (name, surname) {
    this.name = name;
    this.surname = surname;
    this.sum = 0;
}

const PurchaseHistoryItem = function (product, number = 0) {
    this.productName = product.name;
    this.productType = product.type;
    this.productNumber = number;
    this.itemCost = product.cost * number;

    this.time = function () {
        let date = new Date();
        let hours = date.getHours() > 10 ? date.getHours().toString() : "0" + date.getHours().toString();
        let minutes = date.getMinutes() > 10 ? date.getMinutes().toString() : "0" + date.getMinutes().toString();
        let seconds = date.getSeconds() > 10 ? date.getSeconds().toString() : "0" + date.getSeconds().toString();
        return `${hours}:${minutes}:${seconds}`;
    }();
};


const Shop = function () {
    this.productsList = new Map();
    this.clientsList = [];
    this.purchaseHistoryList = [];
    this.totalNumber = 0;
};

Shop.prototype = {
    addClient: function (client) {
        this.clientsList.push(client);
    },

    deleteClient: function (index) {
        this.clientsList.splice(index, 1);
    },

    addProduct: function (product, number = 1) {
        if (this.productsList.has(product.name)) {
            this.productsList.get(product.name).counter += number;
        }
        else {
            let buf = {
                product: product,
                counter: number
            };
            this.productsList.set(product.name, buf);
        }
    },

    deleteProduct: function (product) {
        if (this.productsList.has(product.name)) {
            this.productsList.delete(product.name);
        }
    },

    sellProduct: function (client, product, number = 1) {
        if (this.productsList.has(product.name)) {
            if (number <= this.productsList.get(product.name).counter) {
                client.sum += product.cost * number;
                this.purchaseHistoryList.push(new PurchaseHistoryItem(product, number));
                this.productsList.get(product.name).counter -= number;
            }
            else {
                console.log("not enough product");
            }
        }

    },

    countNumberByType: function () {
        let countByType = new Map();

        for (let [, value] of this.productsList) {
            if (!countByType.has(value.product.type)) {
                countByType.set(value.product.type, value.counter);
            }
            else {
                let buf = countByType.get(value.product.type);
                countByType.set(value.product.type, buf + value.counter);
            }

        }
        return countByType;
    },

    countSumByType: function () {
        let countSumByType = new Map();

        for (let key in this.purchaseHistoryList) {
            if (!countSumByType.has(this.purchaseHistoryList[key].productType)) {
                countSumByType.set(this.purchaseHistoryList[key].productType, this.purchaseHistoryList[key].itemCost);
            }
            else {
                let buf = countSumByType.get(this.purchaseHistoryList[key].productType);
                countSumByType.set(this.purchaseHistoryList[key].productType, buf + this.purchaseHistoryList[key].itemCost);
            }
        }
        return countSumByType;
    }
}

let danylo = new Client('Danylo', 'Varlyhin');
let user = new Client('Because ', 'I\'m batman!')


let banana = new Product('banana', 'fruits', 29);
let apple = new Product('apple', 'fruits', 17);
let potato = new Product('potato', 'vegetables', 15);

let shop = new Shop();

shop.addClient(danylo);
shop.addClient(user);

console.log('\n---Список клиентов до удаления---\n');
console.log(shop.clientsList);

shop.deleteClient(1);

shop.addProduct(banana, 8);
shop.addProduct(apple, 4);
shop.addProduct(potato, 25);

console.log('\n---Список продуктов до взаимодействия с ними (продажи/удаления)---\n');
console.log(shop.productsList);

shop.sellProduct(danylo, banana, 8);
shop.sellProduct(danylo, apple, 2)

console.log('\n---Ассоциативный массив, отображающий количество товаров каждого типа на складе после продажи---\n');
console.log(shop.countNumberByType());

console.log('\n---Ассоциативный массив, отображающий прибыль товаров каждого типа---\n');
console.log(shop.countSumByType());

shop.deleteProduct(potato);
console.log('\n---Список товаров после полного удаления одного из элементов---\n');
console.log(shop.productsList);

console.log('\n---Список клиентов после удаления---\n')
console.log(shop.clientsList);

console.log('\n---История покупок---\n')
console.log(shop.purchaseHistoryList);

