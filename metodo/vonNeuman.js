function metodoVonNeuman(semilla, n) {
    var x; //Este es el numero semilla que se va a transformar en los N numeros pseudoaleatorios
    var arregloSucesiones = [];
    //Guardamos la primer semilla
    arregloSucesiones.push(['Sucesión 0', semilla]);
    for (let i = 0; i < n; i++) {

        x = semilla * semilla;
        //Transformamos x a un string para poder obtener los cuatro numeros centrales
        semillaX = String(x);
        //Comprobamos que la potencia tenga 8 digitos, de lo contrario, completamos dicho numero con ceros a la izquiera

        if (semillaX.length < 8) {
            var semillaXAux = "";
            for (let index2 = 0; index2 < (8 - semillaX.length); index2++) {
                semillaXAux += "0";
            }
            semillaX = semillaXAux + semillaX;

        }

        //Declaramos un auxiliar para x para poder tomar los 4 numeros centrales
        var xAux = "";
        for (let index = 2; index < semillaX.length - 2; index++) {
            xAux += semillaX[index];
        }

        //Ahora comprobamos que xAux (nuestro numero siguiente de la sucecion) no contenga dos ceros al final
        if (xAux[xAux.length - 1] == "0" && xAux[xAux.length - 2] == "0") {
            var auxiliar = "";
            auxiliar = xAux[0] + xAux[1] + "13";
            xAux = auxiliar;
        }

        arregloSucesiones.push(['Sucesión ' + (i + 1), xAux]);

        //Ahora la variable semilla va a tomar el valor de xAux
        semilla = parseInt(xAux);
    }


    //Retornamos el array con todos los numeros pseudoaleatorios calculados
    return arregloSucesiones;

};