let redondear = (termino, cifras) => {
    let factor = Math.pow(10, cifras);
    return Math.round(termino * factor) / factor;
}

let tantoNominal = (tantoK, frecuencia) => {
    let result = tantoK*frecuencia;
    return redondear(result,4);
}

let TAE = (nominal, frecuencia) => {
    let result = Math.pow((1 + nominal/frecuencia),frecuencia)-1;
    return redondear(result,4);
}