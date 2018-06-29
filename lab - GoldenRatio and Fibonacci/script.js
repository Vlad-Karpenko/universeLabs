var e = 0.001;
var a = 0;
var b = 1;
const r = 0.382; //for GoldenRatio

function F(x) {
    return Math.pow(Math.E, x) + x;
}

function GetTheAnswer() {
    GoldenRatio();
    Fibonacci();
}

function GoldenRatio() { //главная функция (Золотое сечение)
    var x1;
    var x2;
    var count = 0;
    while (Math.abs(b - a) > e) {
        count++;
        x1 = b - r * (b - a);
        x2 = a + r * (b - a);
        if (F(x1) > F(x2)) { //При смене знака на <= функция ищет минимум
            a = x1;
        }
        else {
            b = x2
        }
    }
    var resX = (a + b) / 2;
    document.write("Метод золотого сечения" + "<br \/>");
    document.write("Результаты max: х = " + resX + ", f(x) = " + F(resX) + "<br \/>" + "Количество вычислений критерия оптимальности: " + count);
}

function Number_Fib(n) { //Ищем n-ое число Фибоначчи
    var x = 1; //F(n)
    var y = 0; // F(n-1)
    for (var i = 1; i < n; i++) {
        x += y;
        y = x - y;
    }
    return x;
}

function Lambda(n, k) { //вспомогательная функция для x1 (Фибоначчи)
    return a + (Number_Fib(n - k - 1) / Number_Fib(n - k + 1)) * (b - a);
}

function Miu(n, k) { //вспомогательная функция для x2 (Фибоначчи)
    return a + (Number_Fib(n - k) / Number_Fib(n - k + 1)) * (b - a);
}

function Fibonacci() { //главная функция (Фибоначчи)
    var x1 = Lambda(1, 1);
    var x2 = Miu(1, 1);
    var n = 8;
    var k = 1;
    const alpha = 0.2;
    var resX;
    while (Math.abs(b - a) > e) {
        if (F(x1) > F(x2)) { //При смене знака на <= функция ищет минимум
            a = x1;
            x1 = x2;
            x2 = a + (Number_Fib(n - k - 1) / Number_Fib(n - k)) * (b - a);
            if (k == n - 2) {
                //5
                x1 = Lambda(n - 1, k);
                x2 = x1 + alpha;
                if (F(x1) > F(x2)) {
                    a = x1;
                }
                else {
                    b = x1;
                }
                k++;
            }
            else {
                resX = F(x2);
            }
        }
        else {
            b = x2;
            x2 = x1;
            x1 = a + (Number_Fib(n - k - 2) / Number_Fib(n - k)) * (b - a);
            if (k == n - 2) {
                //5
                x1 = Lambda(n - 1, k);
                x2 = x1 + alpha;
                if (F(x1) > F(x2)) {
                    a = x1;
                }
                else {
                    b = x1;
                }
                k++;
            }
            else {
                resX = F(x1);
            }
        }
    }
    resX = (a + b) / 2;
    document.write("<br \/>" + "<br \/>" + "Метод Фибоначчи" + "<br \/>");
    document.write("Результаты max: х = " + resX + ", f(x) = " + F(resX) + "<br \/>");
}

function Chart() { //Построение графика
    new Highcharts.chart('container', {
        title: {
            text: 'График функции'
        },

        xAxis: {
            minPadding: 0.05,
            maxPadding: 0.05
        },

        series: [{
            data: [
                [0, F(0)],
                [0.05, F(0.05)],
                [0.1, F(0.1)],
                [0.15, F(0.15)],
                [0.2, F(0.2)],
                [0.25, F(0.25)],
                [0.3, F(0.3)],
                [0.35, F(0.35)],
                [0.4, F(0.4)],
                [0.45, F(0.45)],
                [0.5, F(0.5)],
                [0.55, F(0.55)],
                [0.6, F(0.6)],
                [0.65, F(0.65)],
                [0.7, F(0.7)],
                [0.75, F(0.75)],
                [0.8, F(0.8)],
                [0.85, F(0.85)],
                [0.9, F(0.9)],
                [0.95, F(0.95)],
                [0.99977328, F(0.99977328)],
                [1, F(1)]
            ]
        }]
    });
}