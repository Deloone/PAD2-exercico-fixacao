//1 - Crie uma função que retorna a string “Olá, ” concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação “!” no final.
function primeiraquestao(text) {
    return`Olá ${text} !`;
}

// 2 – Crie uma função que dado dois valores e uma Callback (passados como parâmetros), mostre no console a soma, subtração, multiplicação e divisão desses valores, dependendo da função Callabck.

function segundaquestao(valor1,valor2,callback) {
    console.log(callback(v1,v2));
}

segundaquestao(32,8, function(valor1,valor2){
    return v1 + v2;
}) 

segundaquestao(20,18, function(valor1,valor2){
    return v1 - v2;
}) 

segundaquestao(25,5, function(valor1,valor2){
    return v1 / v2;
}) 

segundaquestao(10,2, function(valor1,valor2){
    return v1 * v2;
}) 

//3 – Crie uma função que recebe um parâmetro e uma callback que retorna uma outra função que recebe um parâmetro e chama essa callback que verifica se um número inteiro passado na primeira função como parâmetro é divisível por um outro numero passado pela função interna e retorne true ou false.

