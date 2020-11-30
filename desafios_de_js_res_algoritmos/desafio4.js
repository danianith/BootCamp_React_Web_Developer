
/* Desafio 4 - Brinquedos do Papai Noel

Papai Noel todo ano pede ajuda aos elfos para coletar todas as cartinhas das crianças e saber com o quê presenteá-las. Porém, não são todas as crianças que enviam as suas cartinhas e, como ele não quer deixar ninguém de fora, decidiu que vai presentear  mesmo quem não enviou a cartinha. Pensando em um gosto geral, decidiu dar um carrinho de brinquedo para os meninos, e uma boneca para as meninas.

Entrada: A primeira linha da entrada possui um inteiro N (0 < N &leq; 1000), que representa o número de crianças que não enviaram sua cartinha para o Papai Noel. As próximas N linhas consistem em duas strings, a primeira é o nome da criança, e a segunda é uma letra, que pode ser ‘M’, para dizer que é um menino, ou ‘F’ se for uma menina.

Saída: A saída consiste em 2 linhas. A primeira linha deve conter o número de carrinhos que o Papai Noel deve fazer, seguido pela palavra “carrinhos”, e na segunda linha, o número de bonecas seguido pela palavra “bonecas”.
 
Exemplo de Entrada:	 	Exemplo de Saída:

5				2 carrinhos
Milena F			3 bonecas
Joao M
Rafaela F
Renata F
Felipe M
 */

let n = parseInt(gets())
let boys = 0;
let girls = 0;

for (i=0; i<n; i++) {
  let kids = gets().split(' ');
  
  if(kids[1] == 'F') {
    girls++;
  } else if (kids[1] == 'M') {
    boys++;
  }
}

console.log(`${boys} carrinhos`);
console.log(`${girls} bonecas`);
