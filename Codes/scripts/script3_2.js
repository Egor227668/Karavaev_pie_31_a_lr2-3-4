function comparingVariables() {
    let num1 = parseInt(document.getElementById("num3").value);
    let num2 = parseInt(document.getElementById("num4").value);
    if (num1 !== num2) {
        num1 = Math.max(num1, num2);
        num2 = Math.max(num1, num2);
    } else {
        num1 = 0;
        num2 = 0;
    }
    document.getElementById("result2_1").innerText = `Первое число после изменений: ${num1}`;
    document.getElementById("result2_2").innerText = `Второе число после изменений: ${num2}`;
}