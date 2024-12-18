function calcSum() {
    let num = parseInt(document.getElementById("num").value);
    if (num <= 0){
        document.getElementById("result_sum").innerText = `Ваше число меньше или равно нулю, введите другое число`;
    } else {
        let sum = 2
        for (let i = num + 1; i <= num * 2; i++) {
            sum += i * 2;   
        }
        document.getElementById("result_sum").innerText = `Сумма: ${sum}`;
    }
}