let result = document.getElementById('result');

function getResult(num) {
    result.value += num;
}

function clearResult() {
    result.value = '';
}

function calculateResult() {
    let input = result.value;
    let output = eval(input);
    result.value = output;
}
