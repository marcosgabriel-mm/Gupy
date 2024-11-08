function fibonacci(valor) {
    
    let fibonacci = [0, 1];
    let soma = 0;
    
    while ( soma < valor) {
        
        soma = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(soma);
        
        if (soma === valor) {
            return true;
        }
        
    }
    
    return false;
    
}


const valorPertenceFibonacci = 34;
console.log(`\nO valor ${valorPertenceFibonacci} pertence a sequência de Fibonacci? ${fibonacci(valorPertenceFibonacci)}`);