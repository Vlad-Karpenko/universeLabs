
function F(x) {
    return Math.pow(Math.E, x);
}

function GetTheAnswer() {
    Pokoorinatnuy_Spusk();
}

function Pokoorinatnuy_Spusk() {
    var x0 = 0;
    var y0 = F(x0);
    var temp;
    for (var i = 1; i < 10; i++) {
        temp = x0;
        x0++;
        if (F(x0) < y0) {
            y0 = F(x0);
        }
        else {
            temp--;
            if (F(temp) < y0) {
                x0 = temp;
                y0 = F(x0);
            }
            else {
                x0 = temp++;
            }
        }
    }
    document.write("Метод покоординатного спуска" + "<br \/>");
    document.write("Результаты min: х = " + x0 + ", f(x) = " + y0);
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
                [-9, F(-9)],
                [-8, F(-8)],
                [-7, F(-7)],
                [-6, F(-6)],
                [-5, F(-5)],
                [-4, F(-4)],
                [-3, F(-3)],
                [-2, F(-2)],
                [-1, F(-1)],
                [0, F(0)],
                [1, F(1)],
                [2, F(2)],
                [3, F(3)],
                [4, F(4)],
                [5, F(5)],
                [6, F(6)],
                [7, F(7)],
                [8, F(8)],
                [9, F(9)],
                [10, F(10)]
            ]
        }]
    });
}
