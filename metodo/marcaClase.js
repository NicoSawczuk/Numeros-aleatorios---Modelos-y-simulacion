function calcularMarcaClase(arrayNumeros, arrayMC, arrayProbabilidades) {
    var arrayRetorno = [];
    var arrayAcumulado = [];
    var arrayMinimos = [];
    var arrayMaximos = [];
    var auxAcu = 0;
    for (let i = 0; i < arrayProbabilidades.length; i++) {
        arrayProbabilidades[i]= parseInt(arrayProbabilidades[i]);
    }

    var min = 0;
    for (let i = 0; i < arrayProbabilidades.length; i++) {
        //Calculamos lo acumulado
        arrayAcumulado.push(parseInt(auxAcu) + parseInt(arrayProbabilidades[i]));
        arrayMaximos.push(parseInt(arrayAcumulado[i])/10);
        auxAcu = parseInt(auxAcu) + parseInt(arrayProbabilidades[i]);


        //Cargamos el minimo y el máximo
        arrayMinimos.push(min);

        

        //Actualizamos los minimos
        min = arrayMaximos[i]+0.1;

    }
    arrayRetorno.push(arrayAcumulado);
    arrayRetorno.push(arrayMinimos);
    arrayRetorno.push(arrayMaximos);

    //Declaramos los nuevos arrays ()
    var arrayNumerosMC = []; //Este va a contener los mc en lugar de los numeros


    //Clasificamos
    for (let i = 0; i < arrayNumeros.length; i++) {
        for (let j = 0; j < arrayMinimos.length; j++) {
            if (arrayNumeros[i] >= arrayMinimos[j]  && arrayNumeros[i] <= arrayMaximos[j]){
                arrayNumerosMC[i] = arrayMC[j];
                break;
            }            
        }
    }

    //Apariciones
    arrayApariciones = [];
    
    for (let i = 0; i < arrayMC.length; i++) {
        var cant = 0;
        for (let j = 0; j < arrayNumerosMC.length; j++) {
            if (arrayMC[i] === arrayNumerosMC[j]){
                cant++;
            }
        }
        arrayApariciones.push(cant);
    }

    //Cargamos el array de apariciones
    arrayRetorno.push(arrayApariciones);

    //Cargamos el array de aparaciciones esperadas
    arrayRetorno.push(arrayProbabilidades);

    //Obtenidas
    arrayObtenidas = [];
    for (let i = 0; i < arrayApariciones.length; i++) {
        arrayObtenidas.push((parseInt(arrayApariciones[i]) / parseFloat(arrayNumeros.length)*100));
    }

    //Cargamos las obtenidas
    arrayRetorno.push(arrayObtenidas);


    /*El array de retorno contiene:
         0: probabilidades acumuladas
         1: probabilidades minimas
         2: probabilidades maximas
         3: cantidad de apariciones por marca de clase
         4: probabilidades esperadas
         5: probabilidades obtenidas
    */
    return arrayRetorno;

}