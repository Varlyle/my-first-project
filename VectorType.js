// Векторный тип

const Vector = function(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype = {

    plus: function(vector) {
        this.x += vector.x;
        this.y += vector.y;
    
        return this;
    },
    minus: function(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    
        return this;
    },

    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);