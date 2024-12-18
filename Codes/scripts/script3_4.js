function calculateSystem2() {
    let y = null;
    let x = parseInt(document.getElementById("x2").value);
    const a = 1.7;
    const b = 6.6;
    switch(x){
        case -2:
            y = x - (a*x);
            break;
        case 5:
            y = 1/((x**2) + 2);
            break;
        case 3:
            y = ((x + 1)**2)**(1/3);
            break;
        default:
            y = "ваше значение х не является решением данной системы";
    }
    document.getElementById("resylt_y2").innerText = `Ответ: ${y}`;
}