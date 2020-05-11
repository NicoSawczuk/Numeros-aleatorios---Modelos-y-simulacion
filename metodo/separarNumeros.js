function separar(array) {
    var arrayString = ""
    for (let index = 0; index < array.length; index++) {
        arrayString += String(array[index]);

    }

    var arrayRetorno = [];
    for (let index = 0; index < arrayString.length; index++) {
        arrayRetorno.push(arrayString[index]);
    }
    return arrayRetorno;
}