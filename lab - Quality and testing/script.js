let changeCount = 0;
let flag = true;
let prevNumber;
let maxNegativeCount = 0;
let temp = 0;

while (flag) {
    changeSign();
}

if (changeCount === 0 || changeCount === 1) {
    console.log('Знак не менялся');
} else {
    console.log(`Кол-во смены знака - ${changeCount - 1}`);
}

console.log(`Максимальное число отрицательных чисел,идущих подряд - ${maxNegativeCount}`);

function changeSign() {
    let number;
    let n = +prompt("Введите целое число, которое не равно 0", '');
    if (n < 0) {
        number = 0;
        temp++;
        if (maxNegativeCount < temp) {
            maxNegativeCount = temp
        }
        if (prevNumber !== number) {
            changeCount++;
        }
        prevNumber = number;
    } else if (n > 0) {
        number = 1;
        temp = 0;
        if (prevNumber !== number) {
            changeCount++;
        }
        prevNumber = number
    } else {
        flag = false;
        return false
    }
}


