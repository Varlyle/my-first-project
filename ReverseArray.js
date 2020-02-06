// Обращаем массив вспять

const reverseArray = (array) => {
    let buf = [];
    for(let i = array.length - 1; i >= 0; i--) {
        buf.push(array[i]);
    }
    return buf;
}

const reverseArrayInPlace = (array) => {
    let i = 0;
    let j = array.length - 1;

    while(i <= j) {
        let buf = array[i];
        array[i] = array[j];
        array[j] = buf;

        i++;
        j--;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];

console.log(reverseArrayInPlace(arrayValue));