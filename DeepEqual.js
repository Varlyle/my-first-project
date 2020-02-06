// Глубокое сравнение

const deepEqual = (first, second) => {
    if (typeof first == 'object' && typeof second == 'object') {

        // Проверяем, не null ли какой-то из сравниваемых обьектов
        if (first == null || second == null) {
            return false;
        }
        // Сравниванием по длинне. Если в каком-то аргументов больше, они уже не равны
        if (first.length != second.length) {
            return false;
        }

        // Проходим по свойствам первого обьекта
        for (let key in first) {

            // Проверяем, есть ли у второго обьекта такое же свойство, как у первого
            if (first.hasOwnProperty(key) !== second.hasOwnProperty(key)) {
                return false;
            }

            // Смотрим тип свойства
            switch (typeof first[key]) {
                case 'object':
                    if (!deepEqual(first[key], second[key])) {
                        return false;
                    }
                    break;
                case 'function':
                    if (typeof second[key] == 'undefined'
                        || first[key].toString() != second[key].toString()) {
                        return false;
                    }
                    break;
                default:
                    if (first[key] != second[key]) {
                        return false;
                    }
                    break;
            }
        }

        // Проверяем свойства второго обьекта на предмет необьявленных в первом
        for (let key in second) {
            if (typeof second[key] == 'undefined') {
                return false;
            }
        }
    }

    // Если какой-то из параметров не обьект, просто сравниваем их
    else {
        if (first != second) {
            return false;
        }
    }

    // Если до сих пор не выдало false
    return true;
}


let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));