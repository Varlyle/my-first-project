// Задача с построением треугольника

const stairs = () => {
    let string = '';

    const buildStairs = () => {
        while(string.length < 7) {
            console.log(string += '#')
        }
    }

    return buildStairs;
};

let bestStairsEven = stairs();
bestStairsEven();