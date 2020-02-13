export class Client {
    constructor(id, name, surname, spentMoney = 0) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.spentMoney = spentMoney;
        this.productsList = [];
    }

    addProduct(productName, count) {
        for(let i = 0; i < count; i++) {
            this.productsList.push(productName);
        }
    }
}