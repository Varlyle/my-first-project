// FizzBuzz

const FizzBuzz = () => {
    let string;
    for(let i = 1; i <= 100; i++) {
        string = '';

        if(i % 3 == 0)
            {
                string += 'Fizz';
                if (i % 5 == 0) {
                    string += 'Buzz';
                }
            }
        else if (i % 5 == 0)
            {
                string += 'Buzz';
            }

        if(string.length > 0) {
            console.log(string);
        }
    }
};

FizzBuzz();