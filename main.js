WordsList=["yamaga","Apple","Microsoft","parceiro"];
result="error or finish";

function showQuestion() {
    console.log("run makeNum");
    numOfWL=WordsList.length;
    console.log("how much of Words List : " + numOfWL);
    num=Math.floor(Math.random() * numOfWL);
    console.log("choice :" + num);
    question = WordsList[num];
    console.log(question);
    document.getElementById("questionZone").innerText = question;
    console.log("end show Question");
    return question
}

function calculate(answer_tmp,question_tmp) {
    console.log("caluculate Run");
    console.log("question : "+question_tmp);
    console.log("answer : " + answer_tmp);
    if (answer_tmp==question_tmp) {
        result = "Correct！正解！";
        end = true;
    }else{
        result = "不正解";
        end=false;
    }
    console.log("result : " + result);
    console.log("end : "+end);
    document.getElementById("result").innerHTML = result;
}

end=false;
question_01=showQuestion();
while (end==false) {
    document.getElementById('answer').addEventListener("keydown", calculate(this,question_01), false);
}

