var mathInput = document.getElementById("mathInput");
var englishInput = document.getElementById("englishInput");
var submitBtn = document.getElementById("submitBtn");
var gradeBody = document.getElementById("gradeBody");

var count = 0;

submitBtn.addEventListener("click", function() {
    var math = parseFloat(mathInput.value);
    var eng = parseFloat(englishInput.value);

    if (isNaN(math) || isNaN(eng)) {
        alert("Please enter numbers!");
        return;
    }

    count = count + 1;
    var rowAvg = (math + eng) / 2;

    var newRow = "<tr>" +
        "<td>" + count + "</td>" +
        "<td class='math-score'>" + math + "</td>" +
        "<td class='eng-score'>" + eng + "</td>" +
        "<td>" + rowAvg.toFixed(2) + "</td>" +
        "</tr>";

    gradeBody.innerHTML += newRow;

    mathInput.value = "";
    englishInput.value = "";

    updateColumnAverages();
});

function updateColumnAverages() {
    var mathList = document.getElementsByClassName("math-score");
    var engList = document.getElementsByClassName("eng-score");

    var totalMath = 0;
    var totalEng = 0;
    var amount = mathList.length;

    if (amount === 0) return;

    for (var i = 0; i < amount; i++) {
        totalMath = totalMath + parseFloat(mathList[i].innerHTML);
        totalEng = totalEng + parseFloat(engList[i].innerHTML);
    }

    var finalMathAvg = totalMath / amount;
    var finalEngAvg = totalEng / amount;
    var finalTotalAvg = (finalMathAvg + finalEngAvg) / 2;

    document.getElementById("avgMath").innerHTML = finalMathAvg.toFixed(2);
    document.getElementById("avgEng").innerHTML = finalEngAvg.toFixed(2);
    document.getElementById("avgTotal").innerHTML = finalTotalAvg.toFixed(2);
}