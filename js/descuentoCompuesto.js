

let DcapitalInicial = (capitalFinal, tipoDescuento, tiempo)=>{

    let result = capitalFinal * Math.pow((1-tipoDescuento), tiempo);
    return redondear(result, 4);
}

let DcapitalFinal = (capitalInicial, tipoDescuento, tiempo) =>{

    let result = capitalInicial/Math.pow((1-tipoDescuento),tiempo);
    return redondear(result, 4);
};

let DtipoDescuento = (capitalInicial, capitalFinal, tiempo) => {
    let result = Math.pow((capitalInicial/capitalFinal), (1/tiempo)) -1;
    return redondear (result, 4);
};

let Dtiempo = (capitalInicial, capitalFinal, tipoDescuento)=>{
    let result = (Math.log10(capitalInicial/capitalFinal))/(Math.log10(tipoDescuento+1));
    return redondear (result, 4);
};