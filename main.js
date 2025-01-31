let min;
let max;
let num;

function saveMin() {
    min = document.getElementById('min').value;
    
    if (min == parseInt(min)) {
        alert(`O número ${min} foi salvo como mínimo!`);
    } else {
        alert("Por favor, insira um valor válido para o mínimo!");
    }
}

function saveMax() {
    max = document.getElementById("max").value;
    
    if (max == parseInt(max)) {
        alert(`O número ${max} foi salvo como máximo!`);
    } else {
        alert("Por favor, insira um valor válido para o máximo!");
    }
}

function generateNum() {
    num = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min));

    if (min == undefined || max == undefined) {
        alert("Por favor, insira um valor válido para mínimo e máximo!");
    } else if (min != parseInt(min) || max != parseInt(max)) {
        alert("Por favor, insira um valor válido para mínimo e máximo!");
    } else if (parseInt(min) >= parseInt(max)) {
        alert("O valor mínimo deve ser menor que o valor máximo!");
    } else {
        alert(`Número gerado com sucesso!`);
    }
}

let saveMinBtn = document.getElementById("saveMin");
saveMinBtn.addEventListener('click', saveMin);

let saveMaxBtn = document.getElementById("saveMax");
saveMaxBtn.addEventListener('click', saveMax);

let generateNumBtn = document.getElementById("btnNum");
generateNumBtn.addEventListener('click', generateNum);

function checkPal() {
    let palpite = document.getElementById('palpite').value;

    if (/infinito|Infinito/.test(palpite)) {
        window.location.href = "love.html";
    } else if (min == undefined || max == undefined) {
        alert("Por favor, insira um valor válido para mínimo e máximo!");
    } else if (min != parseInt(min) || max != parseInt(max)) {
        alert("Por favor, insira um valor válido para mínimo e máximo!");
    } else if (parseInt(min) >= parseInt(max)) {
        alert("O valor mínimo deve ser menor que o valor máximo!");
    } else if (num == undefined) {
        alert("Por favor, gere um número antes de tentar adivinhar!");
    } else if (parseInt(palpite) == num) {
        alert("Parabéns, você acertou!");
    } else if (parseInt(palpite) > num) {
        alert("O número é menor!");
    } else if (parseInt(palpite) < num) {
        alert("O número é maior!");
    }
}

let adivinharBtn = document.getElementById("btn");
adivinharBtn.addEventListener('click', checkPal);

function reset() {
    min = undefined;
    max = undefined;
    num = undefined;

    document.getElementById('min').value = "";
    document.getElementById('max').value = "";
    document.getElementById('palpite').value = "";

    alert("Valores resetados com sucesso!");
}

let resetBtn = document.getElementById("btnReset");
resetBtn.addEventListener('click', reset);