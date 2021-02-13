var grade;
function GetGrade(){
    grade = document.getElementById("Grade").value;
    sai = grade;
    if(grade > 0 && grade < 6){
        document.getElementById("Invis").style = "display:inline;";
        document.getElementById("Vis").style = "display:none;";
        console.log(sai);
        document.getElementById("Error").innerHTML = "";
    }else{
        document.getElementById("Error").innerHTML = "Set a grade of 1,2,3,4 or 5";
    }
}
var Oper = "";
var RanNum1;

if(grade == 1 ){
    Oper = "+"; 
}
var get_word = ""; 
var pL1n = localStorage.getItem("p1n");
var pL2n = localStorage.getItem("p2n");
if(pL1n = localStorage.getItem("p1n")){
    console.log("Works");
}
var score1 = 0;
var score2 = 0;
document.getElementById("p1name").innerHTML = pL1n + " : " + score1;
document.getElementById("p2name").innerHTML = pL2n + " : " + score2;

//Player Chances

document.getElementById("pq") . innerHTML = "Questioner : " + pL1n;
document.getElementById("pa") . innerHTML = "Answerer : " + pL2n;

//CharAt Code and Funtion SendWord
var row;
var RealAnswer = parseInt(n1) * parseInt(n2);
var randomNum = Math.floor(Math.random()*4);
console.log(randomNum);
var Operations = ["+","-","*","/"];

function SendWord(){
    n1 = document.getElementById("SentN1").value;
    n2 = document.getElementById("SentN2").value;
    RealAnswer = parseInt(n1) * parseInt(n2);
    //RealAnswer 
    /*
    if(grade == 1){
        RealAnswer = parseInt(n1) + parseInt(n2);
    }else{
        if(OperatioRando == "+"){
            RealAnswer = parseInt(n1) + parseInt(n2);
            Oper = "+";
        }
        else if(OperatioRando == "-"){
            RealAnswer = parseInt(n1) - parseInt(n2);
            Oper = "-";
        }
        else if(OperatioRando == "*"){
            RealAnswer = parseInt(n1) * parseInt(n2);
            Oper = "*";
        }
        else if(OperatioRando == "/"){
            RealAnswer = Math.floor(parseInt(n1) / parseInt(n2));
            Oper = "/";
        }
    }*/
    //HTML Code
    questionWord = "<h4 id = 'word_display'>Math Question - If answer is a decimal round it off to the nearest whole number: " + n1 + "*" + n2 + "</h4>";
    inputBox = "<br><br><input id = 'inputcheckbox' type = 'text' placeholder = 'Answer'></input>";
    check_Button = "<br><button class = 'btn btn-info' onclick = 'Check()'>Check</button>";
    row = questionWord+inputBox+check_Button;
    document.getElementById("output").innerHTML = row;
}
//Checking Our ANSWER
var QuestionTurn = "p2";
var AnswerTurn = "p1";
function Check(){
    var getAnswer = document.getElementById("inputcheckbox").value;
    var answer = getAnswer.toLowerCase();
    if(answer ==   RealAnswer){
        if(AnswerTurn == "p1"){
            score1 = score1 + 1;
        document.getElementById("p1name").innerHTML = localStorage.getItem("p1n") + " : " + score1;
        }else{
            score2 = score2 + 1;
        document.getElementById("p2name").innerHTML = localStorage.getItem("p2n") + " : " + score2;
        }    
    }else if(answer != RealAnswer){
        if(AnswerTurn == "p1"){
            score2 = score2 + 1;
        document.getElementById("p2name").innerHTML = localStorage.getItem("p2n") + " : " + score2;
        }else{
            score1 = score1 + 1;
        document.getElementById("p1name").innerHTML = localStorage.getItem("p1n") + " : " + score1;
        }
    }
    if(QuestionTurn == "p1"){
        QuestionTurn = "p2";
        document.getElementById("pq").innerHTML = "Questioner : " + localStorage.getItem("p2n");
    }else{
        QuestionTurn = "p1";
        document.getElementById("pq").innerHTML = "Questioner : " + localStorage.getItem("p1n");
    }
    if(AnswerTurn == "p1"){
        AnswerTurn = "p2";
        console.log(AnswerTurn);
        document.getElementById("pa").innerHTML = "Answerer : " + localStorage.getItem("p2n");
    }else{
        AnswerTurn = "p1";
        document.getElementById("pa").innerHTML = "Answerer : " + localStorage.getItem("p1n");
    }
}

