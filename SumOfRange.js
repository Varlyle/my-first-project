// Сумма диапазона

const range = (start, end, increment = 1) => {
    let array = [];

    // Если начало диапазона меньше конца, и конца возможно достичь
    if(start < end && increment > 0) {
        while(start <= end) {
            array.push(start);
            start += increment
        }
    }

    // Если начало диапазона больше конца, и конца возможно достичь
    else if( start > end && increment < 0) {
        while(start >= end) {
            array.push(start);
            start += increment
        }
    }
    // Некорректное условие, когда до конца дойти невозможно (бесконечный цикл)
    else {
        array = null;
    }

    return array;
}

const sum = (array) => {
    let sum = 0;
    for(let index in array) {              // Просто решил попробовать такой цикл
        sum += array[index];               // Вряд-ли его используют именно так
    }
    return sum;
}

console.log(sum(range(1,10)));
console.log(range(5,2,-1));