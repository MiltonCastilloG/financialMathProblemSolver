// Racional
//         Comercial
//         Tanto de descuento
//         Tanto de interés 

let dCapitalFinal = (capitalInicial, interes, tiempo)=>{
    let result = capitalInicial/ (1 + (interes * tiempo));
    return redondear(result, 4);
}

let dCapitalInicial = (capitalFinal, tipoDescuento, tiempo)=>{
    let result = capitalFinal * (1 - (tipoDescuento * tiempo));
    return redondear(result, 4);
}

let dTipoDescuento = (capitalInicial, capitalFinal, tiempo) => {
    let result =(1-(capitalInicial/capitalFinal))/tiempo;
    result = redondear (result, 4);
}

let dTiempo = (capitalInicial, capitalFinal, tipoDescuento) => {
    let result =(1-(capitalInicial/capitalFinal))/tipoDescuento;
    return redondear(result,4);
}
