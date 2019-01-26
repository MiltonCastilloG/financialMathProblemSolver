

let DCapitalInicial = (capitalFinal, tipoDescuento, tiempo)=>{
    let result = capitalFinal * Math.pow((1-tipoDescuento), tiempo);
    return redondear(result, 4);
}

let DCapitalFinal = (capitalInicial, tipoDescuento, tiempo) =>{

    let result = capitalInicial/Math.pow((1-tipoDescuento),tiempo);
    return redondear(result, 4);
};

let DTipoDescuento = (capitalInicial, capitalFinal, tiempo) => {
    let result = Math.pow((capitalInicial/capitalFinal), (1/tiempo)) -1;
    return redondear (result, 4);
};

let DTiempo = (capitalInicial, capitalFinal, tipoDescuento)=>{
    let result = (Math.log10(capitalInicial/capitalFinal))/(Math.log10(tipoDescuento+1));
    return redondear (result, 4);
};