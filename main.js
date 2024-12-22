///関数定義
function makeNum() {
    console.log(WordsList_English);
    console.log(WordsList_Japanese);
    numOfWL=WordsList_Japanese.length;
    console.log("how much of Words List : " + numOfWL);
    num=Math.floor(Math.random() * numOfWL);
    console.log("choice :" + num);
    return num
}
function reload(){
    if (confirm("リロードしますか？")){
        location.reload();
    }
}
function showQuestion() {
    question = WordsList_Japanese[num];
    console.log(question);
    if (question == undefined) {
        document.getElementById("questionZone").innerText = "全部終わったよ！";
        setTimeout(reload, 1000);
    }else{
        document.getElementById("questionZone").innerText = question;
    }
    console.log("end show Question");
    return question
}

function listDelete(num,listName) {
    word_num=listName[num];
    final_num=listName[listName.length-1];
    listName[num]=final_num;
    listName[listName.length-1]=word_num;
    listName.pop();
}

function calculate(answer_tmp_01,question_tmp) {
    right_answer = WordsList_English[num];
    console.log("caluculate Run");
    console.log("question : "+question_tmp);
    console.log("right answer : "+right_answer)
    console.log("answer : " + answer_tmp_01);
    if (answer_tmp_01==right_answer) {
        result = "Correct！正解！";
        end = true;
    }else if(answer_tmp_01==""){
        result = "答えを入力してください";
        end=false;
    }else{
        result = "不正解";
        end=false;
    }
    console.log("result : " + result);
    console.log("end : "+end);
    document.getElementById("result").innerHTML = result;
    if (end) {
        listDelete(num,WordsList_Japanese);
        listDelete(num,WordsList_English);
        document.getElementById("answer").value = ""; // 入力フィールドをリセット
        makeNum(); // 次の問題を選択
        question_01 = showQuestion(); // 次のクイズを出題
    }
}
function inputChange(event) {
    const answer_tmp_02 = event.target.value;
    calculate(answer_tmp_02,question_01)
}
///変数の定義
WordsList_Japanese=["山雅","アップル（頭文字大文字）","マイクロソフト（頭文字大文字）","パルセイロ","ポテト","バスケットボール","情報"];
WordsList_English=["yamaga","Apple","Microsoft","parceiro","potato","basketball","infomation"];
result="error or finish";
end=false;

///実際の動き
document.getElementById("result").innerHTML = "答えを入力してください";
makeNum();
let question_01=showQuestion();
document.getElementById("answer").addEventListener("input", inputChange);

