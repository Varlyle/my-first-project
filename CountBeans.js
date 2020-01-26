// Считаем "В". Не "В" тоже считаем

const countChar = (string, letter = 'b') => {
    let counter = 0;
    string = string.toLowerCase();
    
    for(let i = 0; i < string.length; i++) {
        if(string[i] == letter) {
            counter++;
        }
    }
    console.log(counter);
}

countChar('Bubble'); // CountBs из условия
countChar('Not a bubble', 'l');