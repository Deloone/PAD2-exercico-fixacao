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

function terceiraquestao(valor1, callback) {
 return function terceiraquestaodenovo(valor2){
     callback(valor1,valor2);
 }
}

var terceiraquestaovalor = terceiraquestao(30, function (valor1,valor2){
    if (valor1 % valor2 == 0) {
        return true;
    } else {return false};
})

terceiraquestaovalor(3);

//4 – Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar “fevereiro”, pois este é o 2° mês.

function mes (mes){
    switch (mes) {
        case 1: 
            console.log('Janeiro');
            break;
        case 2:
            console.log('Fevereiro');
            break;
        case 3:
            console.log('Março');
            break;
        case 4:
            console.log('Abril');
                break;
        case 5:
            console.log('Maio');
            break;
        case 6:
            console.log('Junho');
                break;
        case 7:
            console.log('Julho');
                break;
        case 8:
            console.log("Agosto");
            break;
        case 9: 
            console.log("Setembro");
            break;
        case 10:
            console.log("Outubro");
            break;
        case 11: 
            console.log("Novembro");
            break;
        case 12: 
            console.log("Dezembro");
            break;
        default:
            console.log("você passou um valor inválido");
            break;
   }
 }

 //5 - Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo dependendo da função Callback.
function quintaquestao(valor1, valor2, callback) {
    console.log(callback(valor1,valor2));
}

quintaquestao(24,28, function(valor1,valor2) {
    if(valor1 >= valor2) {
        return valor1 + ' O valor 1 é maior ou igual ao valor 2!';
    }
    else{
      return valor2 + ' O valor 2 é maior!';
    }
})
