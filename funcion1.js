function calcularFactorial(num) {
    if (num < 0) {
        return "El número debe ser positivo.";
    }
    else {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
}
console.log(calcularFactorial (5))