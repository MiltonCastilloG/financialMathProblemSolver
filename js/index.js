var questionsAnswers = [];

let apuntes, calculo = 0;
$("#Texto").on('click', (e) => {
    apuntes++;
    $("#Cuaderno").append(`<li class="list-group-item" id="apunte${apuntes}">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Apunte" aria-label="Apunte de tu ejercicio" aria-describedby="Apunte">
      <div class="input-group-append">
        <button class="btn btn-outline-danger eliminarApunte" type="button" id="eliminarApunte${apuntes}" value="${apuntes}"> Eliminar</button>
      </div>
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
        result += `<button type="button" class="btn btn-outline-success ${operacion}" value="${i}">${obj["nombre"]}</button>`;
    });
    return result;
}
function parseJSONSecond(operacion, jsonKey) {
    let result = "";
    operaciones[jsonKey]["subTipos"].forEach((obj, i) => {
        result += `<button type="button" class="btn btn-outline-success ${operacion}" attr-key1="${jsonKey}" attr-key2="${i}">${obj["nombre"]}</button>`;
    });
    return result;
}
function parseJSONThird(operacion, jsonKey1, jsonKey2) {
    let result = "";
    operaciones[jsonKey1]["subTipos"][jsonKey2]["variables"].forEach((obj, i) => {
        result += `<button type="button" class="btn btn-outline-success ${operacion}" attr-key1="${jsonKey1}" attr-key2="${jsonKey2}" value="${obj["nombre"]}">${obj["nombre"]}</button>`;
    });
    return result;
}
function parseJSONLast(jsonKey1, jsonKey2, selectedVar) {
    let result = "";
    let functionToUse = "";
    operaciones[jsonKey1]["subTipos"][jsonKey2]["variables"].forEach((obj, i) => {
        if(selectedVar==obj["nombre"])
            functionToUse = obj["function"];
        else{
            result += `<div class="input-group-prepend">
            <span class="input-group-text">${obj["nombre"]}</span>
          </div>
          <input type="text" class="calculo${calculo}" attr-name="${obj["nombre_var"]}" aria-label="First name" class="form-control" require>`;
        }
    });
    result += `<button class='btn btn-primary' onClick='sendToFunction(${functionToUse}, ${calculo})'>Respuesta</button>`;
    return result;
}

function sendToFunction(functionToUse, iCalculo){
    let varname = [];
    let objArray = $(".calculo"+iCalculo);
    objArray.each(function() {
        varname[$(this).attr("attr-name")] = $(this).val();
    });
    varname = Object.assign({}, varname);
    console.log(functionToUse(varname));
}

$("#Calculo").on('click', (e) => {
    let operacionS = "";
    calculo++;
    $("#Cuaderno").append(`<li class="list-group-item" id="calculo${calculo}">
    <button class="btn btn-outline-success ejecutarCalculo" type="button" id="ejecutarCalculo${calculo}" value="${calculo}" disabled>Calcular</button>
    <button class="btn btn-outline-danger eliminarCalculo" type="button" id="eliminarCalculo${calculo}" value="${calculo}">Eliminar</button><br/><br/>
    <div class="btn-group" role="group" aria-label="Basic example" id="operaciones">
        ${
            parseJSONFirst("operacion",operaciones)
        }
    </div>
  </li>`);
    $(".eliminarCalculo").on('click', (e) => {
        $(`#calculo${e.currentTarget.value}`).remove();
    });
    $(".operacion").on('click', (e) => {
        operacionS = e.currentTarget.value;
        let buttonTextSecond = $(e.currentTarget).text();
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
                $("#operaciones").remove();
                $(`#operacionSelect${calculo}`).append(`
                <li class="breadcrumb-item active" aria-current="page">${buttonTextLast}</li>
                `);
                $(`#calculo${calculo}`).append(`<div class="input-group">
                    ${parseJSONLast(firstKey,secondKey,selectedVar)}
              </div>`);
            });
        });
    });
});

$("#returnToFirst").click(function (e) {
    $("#firstContainer").css("display", "block");
    $("#secondContainer").css("display", "none");
});

$("#addQuestion").on('click', function (e) {
    if ($("#newQuestion").val().replace(/\s+$/, '') == '' || $("#newAnswer").val().replace(/\s+$/, '') == '') {
        alert("Insert a question and an answer.");
    } else {
        questionsAnswers.push({
            question: $("#newQuestion").val(),
            answer: $("#newAnswer").val().replace(/\s+$/, '')
        });
        updateModifyQuestions();
    }

    $("#newQuestion").val("");
    $("#newAnswer").val("");
});

$("#startGame").on('click', function (e) {
    $("#gameMain").empty();
    questionsAnswers.forEach((element, i) => {
        questionN = i + 1;
        $("#gameMain").append("<div>" +
            "<a class='aQuestion' id='question" + i + "'>" + questionN + ". " + element.question + "</a><br>" +
            "<input type='text' class='answers' id='answer" + i + "' attr-number='" + i + "'><a class='answerResult' id='result" + i + "'></a>" +
            "</div><br>");
    });
    $(".answers").on('keypress', function (e) {
        if (e.which == 13) {
            var answerNum = $(this).attr("attr-number");
            if ($(this).val().replace(/\s+$/, '').toLowerCase() == questionsAnswers[answerNum].answer.toLowerCase()) {
                $(this).prop("disabled", true);
                $("#result" + answerNum).html("&#10004");
            } else {
                $("#result" + answerNum).html("&#10008");
            }
        }
    });
    $("#firstContainer").css("display", "none");
    $("#secondContainer").css("display", "block");
});

function setHistory(number) {
    $(".modify").remove();
    $("#newQuestion").val(questionsAnswers[number].question);
    $("#newAnswer").val(questionsAnswers[number].answer);
}

function updateModifyQuestions() {
    $("#ulQuestions").empty();
    questionsAnswers.forEach((element, i) => {
        $("#ulQuestions").append("<li><a onClick='setHistory(" + i + ")'>" + element.question + "</a></li>");
    });
}