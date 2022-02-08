
var para;
function UpdateRValue() {
    var lr = window.document.getElementById("rate");

    var lb = window.document.getElementById("rValue");
    lb.textContent = lr.value + "%";
}
function buildYears() {
    var text = "";
    for (let i = 1; i < 21; i++) {
        text += " <option value=\"" + i + "\">" + i + "</option>";
    }
    var yr = window.document.getElementById("years");
    yr.innerHTML = text;
}
function init() {
    UpdateRValue();
    buildYears();
}
function res() {

    var resElement = window.document.getElementById("result");
    if (para != undefined)
        resElement.removeChild(para);
    var amountElement = window.document.getElementById("principal");
    var amount = amountElement.value;
    if (amount <= 0) {
        alert("amount must be positive");
        amountElement.focus();
        return;
    }
    para = document.createElement("p");
    para.innerHTML = "If you deposit ";
    
    addSpan(amount);
    para.innerHTML += "at an intresrt rate of ";
    var rate = window.document.getElementById("rate").value;
    addSpan(rate + "%");
    
    para.innerHTML += "You will recieve an amount of ";
    var years = parseInt(window.document.getElementById("years").value);
    addSpan(intrestRate(parseInt(amount), parseInt(rate) / 100, years));
    para.innerHTML += "in the year ";
    var date = new Date();
    var yearcal = date.getFullYear() + years;
    addSpan(yearcal);
    resElement.appendChild(para);
}
function intrestRate(amount, intreset, year) {
    return (amount *  intreset * year) ;
}

function addSpan(number) {
    var span = document.createElement("span");
    span.innerHTML = number;
    para.appendChild(span);

    var br = document.createElement("br");
    para.appendChild(br);
}