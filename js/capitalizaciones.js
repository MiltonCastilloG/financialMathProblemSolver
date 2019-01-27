let cCapitalInicial = ({capitalFinal, interes, tiempo}) => {
    let result = capitalFinal / (1 + (interes * tiempo));
    return redondear(result,4);
}

let cCapitalFinal = ({capitalInicial, interes, tiempo}) => {
    let result = capitalInicial * (1+ (interes * tiempo));
    return redondear(result,4);
}

let cInteres = ({capitalInicial, capitalFinal, tiempo}) => {
    let result = ((capitalFinal/capitalInicial)-1)/tiempo;
    return redondear(result,4);
}

let cTiempo =  ({capitalInicial, capitalFinal, interes}) => {
    let result = ((capitalFinal/capitalInicial)-1)/interes;
    return redondear(result,4);
}

let CCapitalInicial = ({capitalFinal, interes, tiempo}) => {
    let result = capitalFinal / Math.pow((1 + interes/100),tiempo);
    return redondear(result,4);
}

let CCapitalFinal = ({capitalInicial, interes, tiempo}) => {
    let result = capitalInicial * Math.pow((1 + interes/100),tiempo);
    return redondear(result, 4);
}

let CInteres = ({capitalInicial, capitalFinal, tiempo}) => {
    let result = Math.pow((capitalFinal/capitalInicial),(1/tiempo))-1;
    return redondear(result,4);
}

let CTiempo =  ({capitalInicial, capitalFinal, interes}) => {
    let result = (Math.log10(capitalFinal/capitalInicial))/(Math.log10(interes/100+1));
    return redondear(result,4);
}