var ele = document.body.querySelector(".box");
var eleAnswer = document.body.querySelector(".answer");
var qtwo = Number(prompt("enter a number"));


if (isNaN(qtwo)) {

    eleAnswer.innerHTML = "The numbers are bad"
} else {
    var question = prompt("enter an order of operation");

    if (question == '+' || question == '-' || question == '*' || question == '/') {
        var qthree = Number(prompt("enter another number"));
        if (isNaN(qthree)) {
            eleAnswer.innerHTML = "The numbers are bad"
        } else {
        if (question== '+') {
        eleAnswer.innerHTML= qtwo + qthree
        }
        if (question== '-') {
           eleAnswer.innerHTML= qtwo - qthree
        }
        if (question=='*') {
           eleAnswer.innerHTML= qtwo * qthree
        }
        if (question=='/') {
            eleAnswer.innerHTML =  qtwo / qthree
        }

        }
    } else {
        eleAnswer.innerHTML = "The operators are bad"

    }

}