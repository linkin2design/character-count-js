// get Element from html
var inputArea = document.getElementById('inputArea');
var total = document.getElementById('total');
var totalCharts = 1000;
var SubResult = document.getElementById('SubResult');

// creat a function

function totalChars() {
    var totalInput = inputArea.value.length;
    total.innerHTML = totalInput;

    var SubInput = inputArea.value.length;
    SubResult.innerHTML = totalCharts - totalInput
}

totalChars();



