// Racional
//         Comercial
//         Tanto de descuento
//         Tanto de interés 

let dcapitalFinal = (capitalInicial, interes, tiempo)=>{
    let result = capitalInicial/ (1 + (interes * tiempo));
    return redondear(result, 4);
}

let dcapitalInicial = (capitalFinal, tipoDescuento, tiempo)=>{
    let result = capitalFinal * (1 - (tipoDescuento * tiempo));
    return redondear(result, 4);
}

let dtipoDescuento = (capitalInicial, capitalFinal, tiempo) => {
    let result =(1-(capitalInicial/capitalFinal))/tiempo;
    result = redondear (result, 4);
}

let dtiempo = (capitalInicial, capitalFinal, tipoDescuento) => {
    let result =(1-(capitalInicial/capitalFinal))/tipoDescuento;
    return redondear(result,4);
}
