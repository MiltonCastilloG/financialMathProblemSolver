let DCapitalInicial = ({capitalFinal, tipoDescuento, tiempo})=>{
    let result = capitalFinal * Math.pow((1-tipoDescuento/100), tiempo);
    return redondear(result, 4);
}

let DCapitalFinal = ({capitalInicial, tipoDescuento, tiempo}) =>{
    let result = capitalInicial/Math.pow((1-tipoDescuento/100),tiempo);
    return redondear(result, 4);
};

let DTipoDescuento = ({capitalInicial, capitalFinal, tiempo}) => {
    let result = Math.pow((capitalInicial/capitalFinal), (1/tiempo)) -1;
    return redondear (result, 4);
};

let DTiempo = ({capitalInicial, capitalFinal, tipoDescuento})=>{
    let result = (Math.log10(capitalInicial/capitalFinal))/(Math.log10(tipoDescuento/100+1));
    return redondear (result, 4);
};

let dCapitalFinal = ({capitalInicial, interes, tiempo})=>{
    let result = capitalInicial/ (1 + (interes/100 * tiempo));
    return redondear(result, 4);
}

let dCapitalInicial = ({capitalFinal, tipoDescuento, tiempo})=>{
    let result = capitalFinal * (1 - (tipoDescuento/100 * tiempo));
    return redondear(result, 4);
}

let dTipoDescuento = ({capitalInicial, capitalFinal, tiempo}) => {
    let result =(1-(capitalInicial/capitalFinal))/tiempo;
    result = redondear (result, 4);
}

let dTiempo = ({capitalInicial, capitalFinal, tipoDescuento}) => {
    let result =(1-(capitalInicial/capitalFinal))/tipoDescuento/100;
    return redondear(result,4);
}