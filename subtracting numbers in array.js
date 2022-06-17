////
Desafio fatorial *
Considerando que fatoriais são o resultado da multiplicação de todos os números até certo número, ex: 3! = 3x2x1, resolva:
1. Crie um array contendo todos os valores de fatoriais de 0 até 9; 
2. Considerando o valor de 500 mil como inicial, retorne o valor final após subtrair o valor inicial por cada valor dentro do array.
/////

function main() {
    let array = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
    const resultado = array.map(element => 500000 - element)
    console.log(resultado);
}
 main()


    
