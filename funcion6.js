function calcularMCD (a, b)  {
    // Verificar si los números son enteros
    if (!Number.isInteger(a) || ! Number.isInteger(b)) {
    return "Ambos números deben ser enteros.";
    }
    // Asegurarse de que los números sean positivos
    a= Math.abs(a);
    b = Math.abs(b);
    // Utilizar el algoritmo de Euclides para calcular el MCD
    while (b != 0) {
    const temp  = b;
    b = a % b;
    a = temp;
    }
    // El MCD es el valor final de a
    return a;
    }
    console.log(calcularMCD ( 24,  18)); // Output: 6
    console.log(calcularMCD ( 10,  5)); // Output: 5
    console.log(calcularMCD ( 7,  3)); // Output: 1
    console.log(calcularMCD ( 3.5,  2)); // Output: "Ambos números deben ser enteros."