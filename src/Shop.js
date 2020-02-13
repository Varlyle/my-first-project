import { Purchase } from "./Purchase";
import { Product } from "./Product";

export class Shop {
    constructor() {
        this.clients = [];
        this.products = [];
        this.purchases = [];
    }

    addClient(client) {
        this.clients.push(client);
    }

    deleteClient(client) {
        this.clients.forEach((item, i, clients) => {
            if(item.id == client.id) {
                clients.splice(i, 1);
            }
        });
    }

    addProduct(product) {
        this.products.push(product);
    }

    deleteProduct(product) {
        this.products.forEach((item, i, products) => {
            if(item.id == product.id) {
                products.splice(i, 1);
            }
        });
    }

    addPurchase(purchase) {
        this.purchases.push(purchase);
    }

    sellProduct(client, productName, count) {

        let productsToSell = this.products.filter(item => item.name == productName),
            infoProduct = productsToSell[0];

        if(!productsToSell) {
            return `Товара ${productName} нет на складе.`;
        }
        if(productsToSell.length < count) {
            return `Товара ${productName} недостаточно на складе.`
        }

        productsToSell.splice(0, productsToSell.length - count);

        let sum = count * infoProduct.cost;

        productsToSell.forEach(p => {
            this.deleteProduct(p);
        });

        this.addPurchase(new Purchase(infoProduct.name, infoProduct.type, sum, count));
        client.addProduct(productName, count);
        client.spentMoney += sum;
    }

    productsCount() {
        console.log('-------ProductsCount')
        return this.products.length;
    }

    productsCountByType() {
        console.log('-------ProductsCountByType')
        let result = {};
        this.products.map(p => p.type).forEach(function(type) { result[type] = (result[type] || 0) + 1});
        return result;
    }

    purchasedProductsCount() {
        console.log('-------PurchasedProductsCount')
        return this.purchases.map(p => p.amount).reduce((sum, i) => sum + i);
    }

    purchasedSumByType() {
        console.log('-------PurchasedSumByType')
        let result = {};
        this.purchases.forEach(function(p) { result[p.type] = (result[p.type] || 0) + p.sum});
        return result;
    }

    earnedMoney() {
        console.log('-------EarnedMoney')
        return this.clients.map(c => c.spentMoney).reduce((sum, i) => sum + i);
    }

    countClientProducts(client) {
        console.log('-------countClientProducts')
        return client.productsList.length;
    }
}