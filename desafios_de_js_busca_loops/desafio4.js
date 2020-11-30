
/* Desafio 4 - Pink e Cérebro

Pink e Cérebro dividem um apartamento e estão juntos 24h por dia desde o começo da pandemia. Para passar o tempo, Pink cria problemas matemáticos para Cérebro resolver, o último deles foi uma lista de números com a seguinte pergunta: quantos números da lista são múltiplos de 2, 3, 4 e 5?

Apesar de parecer simples, porém, quando a lista contém muitos números, Cérebro se confunde e acaba errando alguns cálculos. Ajude Cérebro a resolver o desadio de Pink.

Entrada: A primeira linha da entrada consiste em um inteiro N (1 ≤ N ≤1000), representando a quantidade de números na lista de Pink.
A segunda linha contém N inteiros Li (1 ≤ Li ≤ 100), representando os números da lista de Pink.

Saída: Imprima a quantidade de números múltiplos de 2, 3, 4 e 5 presentes na lista. Observe a formatação da saída nos exemplos, pois ela deve ser seguida rigorosamente.


Exemplo de Entrada:		Exemplo de Saída:
5				4 Multiplo(s) de 2
2 5 4 20 10			0 Multiplo(s) de 3
				2 Multiplo(s) de 4
				3 Multiplo(s) de 5
*/


let n = parseInt(gets());
let entradas = gets().split(' ');
let mult2 = 0;
let mult3 = 0;
let mult4 = 0;
let mult5 = 0;


for(i=0; i<entradas.length; i++){
 let teste = parseInt(entradas[i]);
 
  if(teste%5 == 0){
      mult5++
  }
 
  if (teste%4 == 0) {
      mult4++;
  }
 
  if (teste%3 == 0) {
      mult3++;
  }
 
  if (teste%2 == 0) {
      mult2++
  }

}

console.log(`${mult2}  Multiplo(s) de 2`)
console.log(`${mult3}  Multiplo(s) de 3`)
console.log(`${mult4}  Multiplo(s) de 4`)
console.log(`${mult5}  Multiplo(s) de 5`)
