//redondear


const valorActualpre = ({capitalInicial, interes, tiempo}) =>{

    let result = capitalInicial * (1+interes)*(1-(Math.pow((1+interes), (tiempo*-1)) / interes));
    return result;
};

const valorActual = ({capitalInicial, interes, tiempo}) =>{

    let result = capitalInicial * (1-(Math.pow((1+interes), (tiempo*-1)) / interes));
    return result;
}

const valorFinalpre = ({capitalInicial, interes, tiempo}) => {

    let result = capitalInicial* (1+interes)* ((Math.pow((  1+ interes), tiempo) -1 ) / interes);
    return result;
};

const valorFinal = ({capitalInicial, interes, tiempo}) => {

    let result = capitalInicial* ((Math.pow((  1+ interes), tiempo) -1 ) / interes);
    return result;
};


const geometrica = ({capitalInicial, interes, tiempo, porcentaje}) => {
    let result;
    if (porcentaje != 1 + interes) {
        result = capitalInicial * ((1-Math.pow(porcentaje, tiempo)* Math.pow((1+interes), tiempo*-1) ) / (1+ interes -porcentaje));
    }else{
        result =( tiempo * capitalInicial) / (1+  interes);
    }

    return result;


};

const geometricaPre = ({}) => {

    let result;
    if (porcentaje != 1 + interes) {
        result =  capitalInicial * ((1-Math.pow(porcentaje, tiempo)* Math.pow((1+interes), tiempo*-1) ) / (1+ interes -porcentaje));
    }else{
        result =( tiempo * capitalInicial) / (1+  interes);
    }
    //agregar (1+i)
    return (1+ interes) * result;


};


const aritmetica = ({}) => {

};



const aritmeticaPre  = ({}) => {

};
