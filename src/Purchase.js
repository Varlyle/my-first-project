export class Purchase {
    constructor(productName, type, sum, amount = 1, time = new Date()) {
        this.productName = productName;
        this.type = type;
        this.sum = sum;
        this.amount = amount;
        this.time = time;
    }
};