let changeCount = 0;
let flag = true;
let prevNumber;
let maxNegativeCount = 0;
let temp = 0;

while (flag) {
    changeSign();
}

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


let div_change_count = document.querySelector('.changeCount');

if (changeCount === 0 || changeCount === 1) {
    div_change_count.innerHTML = '<span>1) Знак не менялся</span>';
} else {
    div_change_count.innerHTML = `1) Количество смены знака - <span class="value">${changeCount - 1}</span>`;
}

let div_MaxNegativeCount = document.querySelector('.maxNegativeCount');
div_MaxNegativeCount.innerHTML = `2) Максимальное число отрицательных чисел, идущих подряд -
                                  <span class="value">${maxNegativeCount}</span>`;

document.querySelector('.close').addEventListener('click', function () {
    location.reload()
});




