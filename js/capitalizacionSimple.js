
let cCapitalInicial = (capitalFinal, interes, tiempo) => {
    let result = capitalFinal / (1 + (interes * tiempo));
    return redondear(result,4);
}

let cCapitalFinal = (capitalInicial, interes, tiempo) => {
    let result = capitalInicial * (1+ (interes * tiempo));
    return redondear(result,4);
}

let cInteres = (capitalInicial, capitalFinal, tiempo) => {
    let result = ((capitalFinal/capitalInicial)-1)/tiempo;
    return redondear(result,4);
}

let cTiempo =  (capitalInicial, capitalFinal, interes) => {
    let result = ((capitalFinal/capitalInicial)-1)/interes;
    return redondear(result,4);
}