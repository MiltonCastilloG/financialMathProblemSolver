var questionsAnswers = [];
let operaciones = ["Capitalizacion", "Descuento", "Sustitucion de capitales", "Equivalencia de intereses"];
let subOperaciones = [
    ["Simple", "Compuesta"],
    ["Simple", "Compuesto"]
];
let operacionEspecifica = [
    ["Capital inicial", "Capital final", "% Interes", "Tiempo"],
    ["Racional", "Comercial", "% Descuento", "Tiempo"],
];
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

$("#Calculo").on('click', (e) => {
    let operacionS = "";
    calculo++;
    $("#Cuaderno").append(`<li class="list-group-item" id="calculo${calculo}">
    <button class="btn btn-outline-success ejecutarCalculo" type="button" id="ejecutarCalculo${calculo}" value="${calculo}" disabled>Calcular</button>
    <button class="btn btn-outline-danger eliminarCalculo" type="button" id="eliminarCalculo${calculo}" value="${calculo}">Eliminar</button><br/><br/>
    <div class="btn-group" role="group" aria-label="Basic example" id="operaciones">
        ${
            getOperaciones("operacion",operaciones)
        }
    </div>
  </li>`);
    $(".eliminarCalculo").on('click', (e) => {
        $(`#calculo${e.currentTarget.value}`).remove();
    });
    $(".operacion").on('click', (e) => {
        operacionS = e.currentTarget.value;
        $("#operaciones").remove();
        $(`#calculo${calculo}`).append(`
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb" id="operacionSelect${calculo}">
          <li class="breadcrumb-item active" aria-current="page">${operaciones[operacionS]}</li>
        </ol>
      </nav>
      <div class="btn-group" role="group" aria-label="Basic example" id="operaciones">
        ${getOperaciones("operacionS",subOperaciones[operacionS])}
      </div>
      `);
        $(".operacionS").on('click', (e) => {
            let operacionSub = e.currentTarget.value;
            $("#operaciones").remove();
            $(`#operacionSelect${calculo}`).append(`
            <li class="breadcrumb-item active" aria-current="page">${subOperaciones[operacionS][operacionSub]}</li>
            `);
            $(`#calculo${calculo}`).append(`<div class="btn-group" role="group" aria-label="Basic example" id="operaciones">
            ${getOperaciones("operacionE",operacionEspecifica[operacionSub])}
        </div>`);
            $(".operacionE").on('click', (e) => {
                let operacionEs = e.currentTarget.value;
                $("#operaciones").remove();
                $(`#operacionSelect${calculo}`).append(`
                <li class="breadcrumb-item active" aria-current="page">${operacionEspecifica[operacionS][operacionEs]}</li>
                `);
                $(`#calculo${calculo}`).append(`<div class="input-group">
                    ${setFormulario(operacionEspecifica[operacionS],operacionEspecifica[operacionS][operacionEs])}
              </div>`);
            });
        });
    });
});

function setFormulario(opciones, valorACalcular){
    let formulario = "";
    opciones.filter( o => o != valorACalcular).forEach(o => {
        formulario +=`<div class="input-group-prepend">
        <span class="input-group-text">${o}</span>
      </div>
      <input type="text" aria-label="First name" class="form-control" require></input>`;
    })
    return formulario;
}

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