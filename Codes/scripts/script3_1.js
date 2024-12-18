function chekingParity() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    if (((num1 % 2 === 0) && (num2 % 2 === 0)) || ((num1 % 2 != 0) && (num2 % 2 != 0))) {
        document.getElementById("result1").innerText = `Ответ: true`;
    } else {
        document.getElementById("result1").innerText = `Ответ: false` ;
    }
}
