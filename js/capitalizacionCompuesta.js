//Cn=Co*(1+i)^n

let CcapitalInicial = (capitalFinal, interes, tiempo) => {
    let result = capitalFinal / Math.pow((1 + interes),tiempo);
    return redondear(result,4);
}

let CcapitalFinal = (capitalInicial, interes, tiempo) => {
    let result = capitalInicial * Math.pow((1 + interes),tiempo);
    return redondear(result,4);
}

let Cinteres = (capitalInicial, capitalFinal, tiempo) => {
    let result = Math.pow((capitalFinal/capitalInicial),(1/tiempo))-1;
    return redondear(result,4);
}

let Ctiempo =  (capitalInicial, capitalFinal, interes) => {
    let result = (Math.log10(capitalFinal/capitalInicial))/(Math.log10(interes+1));
    return redondear(result,4);
}