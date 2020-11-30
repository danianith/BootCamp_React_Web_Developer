
/* Desafio 2 - Comunicação em Piralândia

Os cientistas brasileiros descobriram um exoplaneta a 1 bilhão de anos luz da terra. Ele foi carinhosamente batizado de Piralândia, uma homenagem a cidade de Piracicaba, onde moram os cientistas. Após algum tempo observando esse planeta, os cientistas puderam ver que nele haviam habitantes e, além disso, esses habitantes estavam tentando fazer contato com os cientistas através de uma comunicação numérica. 

Só que a numeração que encontraram estava invertida e como muitas delas foram descobertas, os cientistas chamaram você para conseguir automatizar esse processo. Logo, dado um número grande, sua tarefa é imprimir esse número invertido.

Entrada: O arquivo contém apenas uma linha de teste que é o número encontrado (0 < n < 9999999999).

Saída: Imprimir o número lido invertido. Não esqueça de imprimir a quebra de linha (\n) no final, caso contrário você receberá (Presentation Error).
 
Exemplo de Entrada:	 	Exemplo de Saída:

1234				4321
	
9876543210			0123456789
*/

let str = gets();
str = str.split('').reverse();

str = str.join('');

console.log(str);
