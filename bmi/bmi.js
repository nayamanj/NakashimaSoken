var weight = document.getElementById('weight-input');
var height = document.getElementById('height-input');
var button = document.getElementById('btn-submit');

var output = document.getElementById('bmi-output');

var calcBmi = function () {
    var w = weight.value;
    var h = height.value;
    h = h / 100;
    var bmi = w / (h*h);
    bmi = Math.floor(bmi*10)/10;
    output.innerHTML = bmi.toFixed(1);
};

button.addEventListener('click', calcBmi);
