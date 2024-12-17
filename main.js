///関数定義
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

function calculate(answer_tmp_01,question_tmp) {
    console.log("caluculate Run");
    console.log("question : "+question_tmp);
    console.log("answer : " + answer_tmp_01);
    if (answer_tmp_01==question_tmp) {
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
function inputChange(event) {
    const answer_tmp_02 = event.target.value;
    calculate(answer_tmp_02,question_01)
}
///変数の定義
WordsList=["yamaga","Apple","Microsoft","parceiro"];
result="error or finish";
end=false;
///実際の動き
question_01=showQuestion();
document.getElementById("answer").oninput = calculate(this,question_01)
