let tantoNominal = (ik, frecuencia) => {
    let result = ik*frecuencia;
    return redondear(result,4);
}

let TAE = (jk, k) => {
    let result = Math.pow((1 + jk/k),k)-1;
    return redondear(result,4);
}

let sustitucionDeCapitales = (capitalizaciones, tiempos, interes, momentoT) => {
    let sumOfCap = 0;
    for (let i = 0; i<tiempos.length; i++) {
        if(tiempos[i]>momentoT)
            sumOfCap += capitalizaciones[i]/(1+interes*(tiempos[i]-momentoT));
        else
            sumOfCap += capitalizaciones[i]*(1+interes*(momentoT-tiempos[i]));
    }
    return sumOfCap;
}

let interesSimple = (j, k) => {
    let result = j/k;
    return result;
}

let interesCompuesto = (i, n) => {
    let result = Math.pow((1 + i),1/frecuencia)-1;
    return result;
}