function separarArrayN(array, n) {
    var arrayString = [];
    for (let index = 0; index < array.length; index++) {
        arrayString.push(String(array[index]));
    }

    console.log(n);
    console.log(arrayString);
    console.log(arrayString.length);

    var arrayRetorno = [];
    
    for (let i = 0; i < arrayString.length; i+=n) {
        var aux = String('') ;
        if(i+(n-1)<arrayString.length){
            for ( var j = i ; j <= i+(n-1); j++) {
                aux += arrayString[j];
            }
            arrayRetorno.push(parseInt(aux));
        }

    }

    console.log(arrayRetorno);

    return arrayRetorno;
}