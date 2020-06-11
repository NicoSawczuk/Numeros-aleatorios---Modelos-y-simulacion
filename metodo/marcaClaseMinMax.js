function marcaMinMax(min,max,arrayMC,arrayProbabilidades,arrayNumeros){

    var arrayMinimos =[] ;
    var arrayMaximos =[];
    var arrayRetorno =[];
    var cantElementosMarca = [];

    arrayMinimos.push(min) ;

   
    var cantElementos = Number(max)-Number(min);
    //luego vamos a calcular la cantidad de elementos por marcas de clase
    for (let i = 0; i < arrayProbabilidades.length; i++) {
        cantElementosMarca.push(Number((arrayProbabilidades[i]*cantElementos)/100)) ;
    }
    arrayRetorno.push(cantElementosMarca);

    //esto es para armar el array de minimos y maximos
    for (let i = 0; i < arrayProbabilidades.length; i++) {
        arrayMaximos.push(Number(min)+Number(arrayProbabilidades[i])) ;
        min += Number(arrayProbabilidades[i]) + Number(0.1);
        
        arrayMinimos.push(min.toFixed(2));        
    }
    console.log('utlimo' + typeof(arrayMaximos[arrayMaximos.length-1]));
    arrayMaximos[arrayMaximos.length-1] = (arrayMaximos[arrayMaximos.length-1]).toFixed(0);
    arrayMinimos.pop();

    arrayRetorno.push(arrayMinimos);
    arrayRetorno.push(arrayMaximos);


    var arrayNumerosMC = [];

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
    for (let i = 0; i < arrayProbabilidades.length; i++) {
        arrayProbabilidades[i] = Number((100*Number(arrayProbabilidades[i]))/Number(cantElementos)).toFixed(3);
    }
    arrayRetorno.push(arrayProbabilidades);

    //Obtenidas
    arrayObtenidas = [];
    for (let i = 0; i < arrayApariciones.length; i++) {
        arrayObtenidas.push(((parseInt(arrayApariciones[i]) / parseFloat(arrayNumeros.length))*100).toFixed(3));
    }

    //Cargamos las obtenidas
    arrayRetorno.push(arrayObtenidas);

    return arrayRetorno;
}