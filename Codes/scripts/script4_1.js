function calculate(){
    let arr = document.getElementById("arr").value;
    let array = arr.split(", ").map(Number);
    let i = 0
    let count = 0
    while (array[i] != 0) {
        if (array[i] < 0 && array[i] % 2 != 0) {
            count++
        }
        i++;
    } 
    document.getElementById("result").innerText = `Количество отрицательных нечётных чисел: ${count}`

}