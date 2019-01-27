let apuntes, calculo = 0;
$("#Texto").on('click', (e) => {
    apuntes++;
    $("#Cuaderno").append(`<li class="list-group-item" id="apunte${apuntes}">
    <button class="btn btn-outline-danger eliminarApunte eliminar" type="button" id="eliminarApunte${apuntes}" value="${apuntes}"> Eliminar</button><br/><br/>
    <div class="input-group mb-3">
      <textarea type="text" class="form-control" placeholder="Apunte" aria-label="Apunte de tu ejercicio" aria-describedby="Apunte"></textarea>      
    </div>
    </li>
    `);
    $(".eliminarApunte").on('click', (e) => {
        $(`#apunte${e.currentTarget.value}`).remove();
    });
});

function getOperaciones(operacion, arrayButtons) {
    let result = "";
    let i = 0;
    arrayButtons.forEach((obj) => {
        result += `<button type="button" class="btn btn-outline-success ${operacion}" value="${i}">${obj}</button>`;
        i++;
    })
    return result;
}

function parseJSONFirst(operacion) {
    let result = "";
    operaciones.forEach((obj, i) => {
        result += `<button type="button" class="btn btn-outline-secondary ${operacion}" value="${i}">${obj["nombre"]}</button>`;
    });
    return result;
}

function parseJSONSecond(operacion, jsonKey) {
    let result = "";
    operaciones[jsonKey]["subTipos"].forEach((obj, i) => {
        result += `<button type="button" class="btn btn-outline-secondary ${operacion}" attr-key1="${jsonKey}" attr-key2="${i}">${obj["nombre"]}</button>`;
    });
    return result;
}

function parseJSONThird(operacion, jsonKey1, jsonKey2) {
    let result = "";
    operaciones[jsonKey1]["subTipos"][jsonKey2]["variables"].forEach((obj, i) => {
        result += `<button type="button" class="btn btn-outline-secondary ${operacion}" attr-key1="${jsonKey1}" attr-key2="${jsonKey2}" value="${obj["nombre"]}">${obj["nombre"]}</button>`;
    });
    return result;
}

function parseJSONLast(jsonKey1, jsonKey2, selectedVar, operacionName) {
    let result = "";
    let functionToUse = "";
    operaciones[jsonKey1]["subTipos"][jsonKey2]["variables"].forEach((obj, i) => {
        if (selectedVar == obj["nombre"])
            functionToUse = obj["function"];
        else {
            result += `<div class="input-group-prepend">
            <span class="input-group-text">${obj["nombre"]}</span>
          </div>
          <div id="dropInput">
          <input type="number" class="calculo${calculo} form-control ${functionToUse}${calculo}-${(obj["nombre"]==='% Interes' || obj["nombre"]==='% Descuento')?
          'porcentaje':obj["nombre"]}" attr-name="${obj["nombre_var"]}" aria-label="First name" require></div>`;
        }
    });
    result += `<button class='btn btn-outline-success' id="resolve${calculo}" onClick='sendToFunction(${functionToUse}, ${calculo})'>Calcular</button>`;
    localStorage.setItem('operacionName', JSON.stringify(operacionName));
    return result;
}


function sendToFunction(functionToUse, iCalculo) {
    let varname = [];
    let error = false;
    let objArray = $(".calculo" + iCalculo);
    objArray.each(function () {
        if ($(this).val().length <= 0 || !$(this).val()) {
            error = true;
            return false;
        }
        varname[$(this).attr("attr-name")] = $(this).val();
    });
    varname = Object.assign({}, varname);
    let result = functionToUse(varname);
    if (!error && result) {
        objArray.each(function () {
            $(this).prop("readonly", true);
        });
        $(`#resolve${iCalculo}`).prop("disabled", true);
        $(".resultado").remove();
        $(`#calculo${calculo}`).append(`<br/><div class="card border-success mb-3 centro resultado" style="max-width: 18rem;">
            <div class="card-body text-success centro">
            <h3 class="card-text">${result}</h3>
            </div>
        </div>`);
        addHistorial(result, iCalculo);
    } else {
        $(`#calculo${calculo}`).append(`<br/><div class="card border-danger mb-3 centro resultado" style="max-width: 18rem;">
            <div class="card-body text-danger centro">
            <h5 class="card-text">Error en la operacion, por favor verificar valores</h5>
            </div>
        </div>`);
    }
}

function addHistorial(result, iCalculo) {
    let nombre = "";
    let operacionName = Object.values(JSON.parse(localStorage.getItem("operacionName")));
    operacionName.forEach((e) => nombre += e + " ");
    $("#Historial").append(`<li class="list-group-item text-secondary" id=resultado${iCalculo} value=${nombre}>
        <div class="card border-secondary">
        <div class="card-header card-text tituloHistorial">${nombre}</div>
            <div class="card-body" id=result${iCalculo}>
                <p class="card-text">${result}</p>
            </div>
        </div>
    </li>`);
    $(`#result${iCalculo}`).draggable({
        appendTo: "body",
        helper: "clone"
    });
}

$("#Calculo").on('click', (e) => {
    let operacionS = "";
    let operacionName = [];
    calculo++;
    $("#Cuaderno").append(`<li class="list-group-item" id="calculo${calculo}">
    <button class="btn btn-outline-danger eliminarCalculo eliminar" type="button" id="eliminarCalculo${calculo}" value="${calculo}">Eliminar</button><br/>
    <div class="btn-group" role="group" aria-label="Basic example" id="operaciones">
        ${
            parseJSONFirst("operacion",operaciones)
        }   
    </div>
  </li>`);
    $(".eliminarCalculo").on('click', (e) => {
        let itemToDelete = e.currentTarget.value
        $(`#resultado${itemToDelete}`).remove();
        $(`#calculo${itemToDelete}`).remove();
    });
    $(".operacion").on('click', (e) => {
        operacionS = e.currentTarget.value;
        let buttonTextSecond = $(e.currentTarget).text();
        operacionName.push(buttonTextSecond);
        $("#operaciones").remove();
        $(`#calculo${calculo}`).append(`
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb" id="operacionSelect${calculo}">
          <li class="breadcrumb-item active" aria-current="page">${buttonTextSecond}</li>
        </ol>
      </nav>
      <div class="btn-group" role="group" aria-label="Basic example" id="operaciones">
        ${parseJSONSecond("operacionS",operacionS)}
      </div>
      `);
        $(".operacionS").on('click', (e) => {
            let firstKey = $(e.currentTarget).attr("attr-key1");
            let secondKey = $(e.currentTarget).attr("attr-key2");
            let buttonTextThird = $(e.currentTarget).text();
            operacionName.push(buttonTextThird);
            $("#operaciones").remove();
            $(`#operacionSelect${calculo}`).append(`
            <li class="breadcrumb-item active" aria-current="page">${buttonTextThird}</li>
            `);
            $(`#calculo${calculo}`).append(`<div class="btn-group" role="group" aria-label="Basic example" id="operaciones">
            ${parseJSONThird("operacionE",firstKey, secondKey)}
        </div>`);
            $(".operacionE").on('click', (e) => {
                let selectedVar = e.currentTarget.value;
                let firstKey = $(e.currentTarget).attr("attr-key1");
                let secondKey = $(e.currentTarget).attr("attr-key2");
                let buttonTextLast = $(e.currentTarget).text();
                operacionName.push(buttonTextLast);
                $("#operaciones").remove();
                $(`#operacionSelect${calculo}`).append(`
                <li class="breadcrumb-item active" aria-current="page">${buttonTextLast}</li>
                `);
                $(`#calculo${calculo}`).append(`<div class="input-group">
                    ${parseJSONLast(firstKey,secondKey,selectedVar,operacionName)}
              </div>`);
                $("#dropInput input").droppable({
                    drop: function (event, ui) {
                        let destino = $(this)[0].classList[2];
                        let vacio = !$(this)[0].readOnly;
                        let result = ui.draggable.text().replace(/\s/g, '');
                        result = parseFloat(result);
                        $(this).css('background', '');
                        vacio && $(`.${destino}`).val(result);
                    },
                    over: function (event, ui) {
                        let vacio = !$(this)[0].readOnly;
                        vacio && $(this).css('background', 'rgb(0,200,0)');
                    },
                    out: function (event, ui) {
                        $(this).css('background', '');
                    }
                });

            });
        });
    });
});