
/* Desafio 5 - Pedro Bento e o Mundo de OZ

No jogo, O Mundo de Oz, Pedro Bento é o líder do Tribunal, por causa disso ele é uma das pessoas mais importantes do mundo, no jogo. Além disso, Pedro Bento possui um grande tesouro, o qual possui diversos tipos de jóias.

Pedro Bento está muito curioso para saber quantos tipos de jóias diferentes seu tesouro possui.

Sabendo que você é o melhor programador do mundo, Pedro Bento te contratou para verificar quantos tipos de jóias distintas ele tem em seu tesouro.

Entrada: A entrada consiste de várias linhas e cada uma contém uma string que descreve uma das jóias de Pedro Bento. Essa string é composta apenas dos caracteres '(' e ')', a soma do tamanho de todas as string não excede 106.

Saída: Imprima quantos tipos de jóias distintas Pedro Bento possui.
 
Exemplo de Entrada:	 	Exemplo de Saída:

((				3

))

((

))

(
*/

let joias = [];
let pare = 0;

while (pare !== 1) {
  let casos = gets()
  
  if (casos == 0) {
    pare = 1;
  } else {
    for (i=1; i<=casos.length; i++) {
      joias.push(casos);
    }
  }
}

let unicos = joias.filter(function(elem, pos, self) {
  return self.indexOf(elem) == pos;
})

console.log(unicos.length);

