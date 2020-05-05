function metodoCongruenciaMixto(semilla, a, c, m, iteraciones) {

    console.log(semilla)
    console.log(a)
    console.log(c)
    console.log(m)
    console.log(iteraciones)

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
        //34982
        //52115
    for (let index = 0; index < iteraciones; index++) {

        console.log('a por semilla' + a * semilla);
        console.log('res mod m' + ((a * semilla) + c) % m);
        x = ((a * semilla) + c) % m;
        array.push(['Iteracion ' + (index + 1), x]);
        semilla = x;

    }

    return array;

}