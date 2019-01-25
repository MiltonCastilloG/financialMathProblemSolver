let redondear = (termino, cifras) => {
    let factor = Math.pow(10, cifras);
    return Math.round(termino * factor) / factor;
}

