
let ccapitalInicial = (capitalFinal, interes, tiempo) => {
    let result = capitalFinal / (1 + (interes * tiempo));
    return redondear(result,4);
}

let ccapitalFinal = (capitalInicial, interes, tiempo) => {
    let result = capitalInicial * (1+ (interes * tiempo));
    return redondear(result,4);
}

let cinteres = (capitalInicial, capitalFinal, tiempo) => {
    let result = ((capitalFinal/capitalInicial)-1)/tiempo;
    return redondear(result,4);
}

let ctiempo =  (capitalInicial, capitalFinal, interes) => {
    let result = ((capitalFinal/capitalInicial)-1)/interes;
    return redondear(result,4);
}