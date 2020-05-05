function metodoCongruenciaMixto(semilla, a, c, m, iteraciones) {

    //Transformamos los atributos recibidos a enteros 
    semilla = parseInt(semilla);
    a = parseInt(a);
    c = parseInt(c);
    m = parseInt(m);
    iteraciones = parseInt(iteraciones);

    var x = 0;
    //Cargamos el array a retornar con la primera iteracion (la semilla cargada por el usuario)
    var array = [
        ['Iteracion 0', semilla]
    ];
    array.push()

    //Realizamos las iteraciones
    for (let index = 0; index < iteraciones; index++) {

        //Calculamos el siguiente numero de la sucesión
        x = ((a * semilla) + c) % m;
        //Cargamos el nuevo numero de la sucesión al array a retornar
        array.push(['Iteracion ' + (index + 1), x]);
        semilla = x;

    }

    //Retornamos el array con todos los numeros pseudoaleatorios calculados
    return array;

}