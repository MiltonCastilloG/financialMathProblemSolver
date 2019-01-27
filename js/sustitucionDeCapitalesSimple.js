let redondear = (termino, cifras) => {
    let factor = Math.pow(10, cifras);
    return Math.round(termino * factor) / factor;
}

let capitalInicial = (capitalFinal, interes, tiempo) => {
    let result = capitalFinal / (1 + (interes/100 * tiempo));
    return redondear(result,4);
}

let capitalFinal = (capitalInicial, interes, tiempo) => {
    let result = capitalInicial * (1+ (interes/100 * tiempo));
    return redondear(result,4);
}

let interes = (capitalInicial, capitalFinal, tiempo) => {
    let result = ((capitalFinal/capitalInicial)-1)/tiempo;
    return redondear(result,4);
}

let tiempo =  (capitalInicial, capitalFinal, interes) => {
    let result = ((capitalFinal/capitalInicial)-1)/interes/100;
    return redondear(result,4);
}