document.getElementById("calc").addEventListener("click", function () 
{
    var assignments = $("#assignments").val()*50
    var GroupPro = $("#GroupPro").val() *10
    var quiz = $("#quiz").val() *10
    var midterm = $("#midterm").val()* 10
    var final = $("#final").val() *10
    var intex = $("#intex").val() * 10
    var letterGrade = ""
    //calculate weighted grade
    sum = ((assignments + GroupPro + quiz + midterm + final + intex) / 100)
    //findletter grade
    if (sum > 94) {
        letterGrade = "A"
    }
    else if (sum >= 90) {
        letterGrade = "A-"
    }
    else if (sum >= 87) {
        letterGrade = "B+"
    }
    else if (sum >= 84) {
        letterGrade = "B"
    }
    else if (sum >= 80) {
        letterGrade = "B-"
    }
    else if (sum >= 77) {
        letterGrade = "C+"
    }
    else if (sum >= 74) {
        letterGrade = "C"
    }
    else if (sum >= 70) {
        letterGrade = "C-"
    }
    else if (sum >= 67) {
        letterGrade = "D+"
    }
    else if (sum >= 64) {
        letterGrade = "D"
    }
    else if (sum >= 60) {
        letterGrade = "D-"
    }
    else {
        letterGrade = "E"
    }
    //display letter grade and score in form
    alert( "your calculated grade is " + ((assignments + GroupPro + quiz + midterm + final + intex) / 100) + "% " + letterGrade)
}

    )