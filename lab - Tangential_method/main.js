const eps = 0.0001;

function f(x) { // вычисляемая функция
    return 3 - 0.5 * Math.sqrt(x) - Math.exp(-0.5 * x ^ 2);
}

function df(x) { // производная функции
    return (x * Math.exp(-x ^ 2 / 2)) - 1 / 4 * Math.sqrt(x);
}

function solve(f, df, x0) {
    var x1 = x0 - f(x0) / df(x0);
    while (Math.abs(x1 - x0) > eps) {
        x0 = x1;
        x1 = x1 - f(x1) / df(x1)
    }
    return x1;
}


alert("\nМетод касательных\nУравнение 3-0.5*sqrt(x)-exp(-0.5*x^2) \nКорень на интервале [32;40] = " + solve(f, df, 36));