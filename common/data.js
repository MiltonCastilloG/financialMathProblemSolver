const operaciones = [
    {
        "nombre": "Capitalizacion",
        "subTipos": [
            {
                "nombre": "Simple",
                "variables": [{
                    "nombre": "Capital inicial",
                    "function": "cCapitalInicial",
                    "nombre_var": "capitalInicial"
                }, {
                    "nombre": "Capital final",
                    "function": "cCapitalFinal",
                    "nombre_var": "capitalFinal"
                }, {
                    "nombre": "% Interes",
                    "function": "cInteres",
                    "nombre_var": "interes"
                }, {
                    "nombre": "Tiempo",
                    "function": "cTiempo",
                    "nombre_var": "tiempo"
                }]
            },
            {
                "nombre": "Compuesta",
                "variables": [{
                    "nombre": "Capital inicial",
                    "function": "CCapitalInicial",
                    "nombre_var": "capitalInicial"
                }, {
                    "nombre": "Capital final",
                    "function": "CCapitalFinal",
                    "nombre_var": "capitalFinal"
                }, {
                    "nombre": "% Interes",
                    "function": "CInteres",
                    "nombre_var": "interes"
                }, {
                    "nombre": "Tiempo",
                    "function": "CTiempo",
                    "nombre_var": "tiempo"
                }]
            }
        ],
        
    },
    {
        "nombre": "Descuento",
        "subTipos": [
            {
                "nombre": "Simple Racional",
                "variables": [{
                        "nombre": "Capital inicial",
                        "function": "cCapitalInicial",
                        "nombre_var": "capitalInicial"
                    }, {
                        "nombre": "Capital final",
                        "function": "cCapitalFinal",
                        "nombre_var": "capitalFinal"
                    }, {
                        "nombre": "% Interes",
                        "function": "cInteres",
                        "nombre_var": "interes"
                    }, {
                        "nombre": "Tiempo",
                        "function": "cTiempo",
                        "nombre_var": "tiempo"
                    }
                ]
            },
            {
                "nombre": "Simple Comercial",
                "variables": [
                    {
                        "nombre": "Capital Inicial",
                        "function": "dCapitalInicial",
                        "nombre_var": "capitalInicial"
                    }, {
                        "nombre": "Capital Final",
                        "function": "dCapitalFinal",
                        "nombre_var": "capitalFinal"
                    }, {
                        "nombre": "% Descuento",
                        "function": "dTipoDescuento",
                        "nombre_var": "tipoDescuento"
                    }, {
                        "nombre": "Tiempo",
                        "function": "dTiempo",
                        "nombre_var": "tiempo"
                    }
                ]
            },
            {
                "nombre": "Compuesto Comercial",
                "variables": [
                    {
                        "nombre": "Capital Inicial",
                        "function": "DCapitalInicial",
                        "nombre_var": "capitalInicial"
                    }, {
                        "nombre": "Capital Final",
                        "function": "DCapitalFinal",
                        "nombre_var": "capitalFinal"
                    }, {
                        "nombre": "% Descuento",
                        "function": "DTipoDescuento",
                        "nombre_var": "tipoDescuento"
                    }, {
                        "nombre": "Tiempo",
                        "function": "DTiempo",
                        "nombre_var": "tiempo"
                    }
                ]
            },
            {
                "nombre": "Compuesto Racional",
                "variables": [{
                        "nombre": "Capital inicial",
                        "function": "CCapitalInicial",
                        "nombre_var": "capitalInicial"
                    }, {
                        "nombre": "Capital final",
                        "function": "CCapitalFinal",
                        "nombre_var": "capitalFinal"
                    }, {
                        "nombre": "% Interes",
                        "function": "CInteres",
                        "nombre_var": "interes"
                    }, {
                        "nombre": "Tiempo",
                        "function": "CTiempo",
                        "nombre_var": "tiempo"
                    }
                ]
            },        
        ],
    }
];