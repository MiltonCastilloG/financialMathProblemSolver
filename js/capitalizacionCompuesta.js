//Cn=Co*(1+i)^n
let redondear = (termino, cifras) => {
    let factor = Math.pow(10, cifras);
    return Math.round(termino * factor) / factor;
}

let capitalInicial = (capitalFinal, interes, tiempo) => {
    let result = capitalFinal / Math.pow((1 + interes),tiempo);
    return redondear(result,4);
}

let capitalFinal = (capitalInicial, interes, tiempo) => {
    let result = capitalInicial * Math.pow((1 + interes),tiempo);
    return redondear(result,4);
}

let interes = (capitalInicial, capitalFinal, tiempo) => {
    let result = Math.pow((capitalFinal/capitalInicial),(1/tiempo))-1;
    return redondear(result,4);
}

let tiempo =  (capitalInicial, capitalFinal, interes) => {
    let result = (Math.log10(capitalFinal/capitalInicial))/(Math.log10(interes+1));
    return redondear(result,4);
}