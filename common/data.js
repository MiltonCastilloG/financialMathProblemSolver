const operaciones = [
    {
        "nombre": "Capitalizacion",
        "subTipos": [
            {
                "nombre": "Simple",
                "variables": [{
                    "nombre": "Capital inicial",
                    "funcion": "cCapitalInicial"
                }, {
                    "nombre": "Capital final",
                    "funcion": "cCapitalFinal"
                }, {
                    "nombre": "% Interes",
                    "function": "cInteres"
                }, {
                    "nombre": "Tiempo",
                    "function": "cTiempo"
                }]
            },
            {
                "nombre": "Compuesta",
                "variables": [{
                    "nombre": "Capital inicial",
                    "function": "CCapitalInicial"
                }, {
                    "nombre": "Capital final",
                    "function": "CCapitalFinal"
                }, {
                    "nombre": "% Interes",
                    "function": "CInteres"
                }, {
                    "nombre": "Tiempo",
                    "function": "CTiempo"
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
                        "function": "cCapitalInicial"
                    }, {
                        "nombre": "Capital final",
                        "function": "cCapitalFinal"
                    }, {
                        "nombre": "% Interes",
                        "function": "cInteres"
                    }, {
                        "nombre": "Tiempo",
                        "function": "cTiempo"
                    }
                ]
            },
            {
                "nombre": "Simple Comercial",
                "variables": [
                    {
                        "nombre": "Racional",
                        "function": "DCapitalInicial"
                    }, {
                        "nombre": "Comercial",
                        "function": "DCapitalFinal"
                    }, {
                        "nombre": "% Descuento",
                        "function": "DTipoDescuento"
                    }, {
                        "nombre": "Tiempo",
                        "function": "DTiempo"
                    }
                ]
            },
            {
                "nombre": "Compuesto Simple",
                "variables": [{
                        "nombre": "Capital inicial",
                        "function": "CCapitalInicial"
                    }, {
                        "nombre": "Capital final",
                        "function": "CCapitalFinal"
                    }, {
                        "nombre": "% Interes",
                        "function": "CInteres"
                    }, {
                        "nombre": "Tiempo",
                        "function": "CTiempo"
                    }
                ]
            },
            {
                "nombre": "Compuesto Racional",
                "variables": [
                    {
                        "nombre": "Racional",
                        "function": "DCapitalInicial"
                    }, {
                        "nombre": "Comercial",
                        "function": "DCapitalFinal"
                    }, {
                        "nombre": "% Descuento",
                        "function": "DTipoDescuento"
                    }, {
                        "nombre": "Tiempo",
                        "function": "DTiempo"
                    }
                ]
            },        
        ],
    }
];