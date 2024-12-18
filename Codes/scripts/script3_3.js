function calculateSystem() {
    let y = null;
    let x = parseFloat(document.getElementById("x").value);
    const a = 1.7;
    if (x <= -1) {
        y = (x**2)-(a*x);
    } else if (x > -1 && x <= 4) {
        y = ((x + 1)**2)**(1/3);
    } else {
        y = 1/((x**2) + 2);
    }
    document.getElementById("result_y").innerText = `Ответ: y = ${y}`;
}