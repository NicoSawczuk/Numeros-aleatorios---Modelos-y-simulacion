function metodoCongruenciaMixto(semilla, a, c, m, iteraciones) {

    semilla = parseInt(semilla);
    a = parseInt(a);
    c = parseInt(c);
    m = parseInt(m);
    iteraciones = parseInt(iteraciones);

    var x = 0;
    var array = [
        ['Iteracion 0', semilla]
    ];
    array.push()
    for (let index = 0; index < iteraciones; index++) {

        x = ((a * semilla) + c) % m;
        array.push(['Iteracion ' + (index + 1), x]);
        semilla = x;

    }

    return array;

}