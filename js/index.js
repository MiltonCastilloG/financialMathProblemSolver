var questionsAnswers = [];

$("#returnToFirst").click(function(e) {
    $("#firstContainer").css("display", "block");
    $("#secondContainer").css("display", "none");
});

$("#addQuestion").on('click',function(e) {
    if($("#newQuestion").val().replace(/\s+$/, '')=='' || $("#newAnswer").val().replace(/\s+$/, '')==''){
        alert("Insert a question and an answer.");
    }
    else{
        questionsAnswers.push({
            question: $("#newQuestion").val(),
            answer:  $("#newAnswer").val().replace(/\s+$/, '')
        });
        updateModifyQuestions();
    }
    
    $("#newQuestion").val("");
    $("#newAnswer").val("");
});

$("#startGame").on('click',function(e) {
    $("#gameMain").empty();
    questionsAnswers.forEach( (element, i) => {                                                                                       
        questionN = i +1;
        $("#gameMain").append("<div>"
            + "<a class='aQuestion' id='question"+i+"'>"+questionN+". "+element.question+"</a><br>"
            + "<input type='text' class='answers' id='answer"+i+"' attr-number='"+i+"'><a class='answerResult' id='result"+i+"'></a>"
            + "</div><br>");
    });
    $(".answers").on('keypress',function(e) {
        if(e.which == 13) {
            var answerNum = $(this).attr("attr-number");
            if($(this).val().replace(/\s+$/, '').toLowerCase()== questionsAnswers[answerNum].answer.toLowerCase()){
                $(this).prop("disabled", true );
                $("#result"+answerNum).html("&#10004");
            }
            else{
                $("#result"+answerNum).html("&#10008");
            }
        }
    });
    $("#firstContainer").css("display", "none");
    $("#secondContainer").css("display", "block");
});

function setHistory(number){
    $(".modify").remove();
    $("#newQuestion").val(questionsAnswers[number].question);
    $("#newAnswer").val(questionsAnswers[number].answer);
}

function updateModifyQuestions(){
    $("#ulQuestions").empty();
    questionsAnswers.forEach( (element, i) => {                                                                                    
        $("#ulQuestions").append("<li><a onClick='setHistory("+i+")'>"+element.question+"</a></li>");
    });
}