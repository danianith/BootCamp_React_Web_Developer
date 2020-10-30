/* Aula 5 - Manipulando elementos da página */

function botao() {
    //alert('Obrigada por clicar');
    document.getElementById("agradecimento").innerHTML = '<b>Obrigada por clicar!</b>';    
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    window.open('https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide');
    // window.location.href = 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide'; abre na mesma janela
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigada por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse"
    //alert('trocar texto');
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!"
}

function load() {
    alert("Página carregada!")
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}



/* Aula 4 - Desenvolva página web com JS 

function soma(n1, n2) {
    return n1 + n2
}
console.log(soma(5,10));

function validaIdade(idade) {
    var validar;
    if(idade >= 18) {
        validar = true;

    } else {
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual a sua idade?")
console.log(validaIdade(idade));*/

// Aula 3 - Condicionais, laços de repetição e Date 

/*var idade = prompt('Qual a sua idade?');

if (idade >= 18) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
};*/

/*var count = 0;
while (count <= 5) {
    console.log(count);
    count++;
};*/

/*var count;
for (count=0; count <= 5; count++) {
    console.log(count);
};*/

/*var d = new Date();
console.log(d.getMonth()+1);
console.log(d.getDay()+1);
console.log(d.getHours());
console.log(d.getMinutes()+1);*/




/* Aula 2 - Array e Dicionários

var lista = ["maçã", "pêra", "laranja"];
lista.push("uva"); //Add uva na lista
lista.pop(); //deleta o último ítem da lista.
console.log(lista.length); // tamanho da lista
console.log(lista[1]); // mostra o item no espaço 1.
console.log(lista.reverse()); // imprime a lista de trás para frente
console.log(lista.toString()); // Imprime sem os colchetes de array.
console.log(lista.join(' - ')); //Imprime sem os colchetes de array mas permite colocar o que desejar no separador.

//Dicionário
var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

// Lista de dicionário
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome); */



/* Aula 1 - Introdução ao JS

var nome = "Daniani Thozeski";
var idade = 38;
var idade2 = 10;
var n1 = 5;
var n2 = 3;
var frase = "Holanda é o melhor time do mundo."
alert("Meu primeiro JS");
alert("Bem Vinda " + nome + " você tem " + idade + " anos.");
alert(idade + idade2);

console.log(nome);
console.log(idade + idade2);
console.log(n1 * n2);
console.log(frase.replace("Holanda","Japão"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
alert(frase.replace("Holanda","Japão"));*/