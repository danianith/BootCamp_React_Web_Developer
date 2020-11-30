
/* Desafio 3 - Pizza Antes do Final do Ano

Está chegando o final de ano e as tradicionais celebrações de amigo secreto, você e seus N-1 amigos decidiram combinar algum dia para ir a uma pizzaria.

Neste momento está sendo escolhida a data do evento. Para que todas as pessoas possam participar, foi decidido que o encontro na pizzaria ocorrerá em um data tal que todas as N pessoas podem comparecer à pizzaria nesta data. Portanto, nem toda data pode ser escolhida, pois algumas pessoas podem ter outros compromissos já marcados em alguns dias.

Dada a lista de datas consideradas para o evento e a informações de quais pessoas podem comparecer em quais datas, determine se o evento poderá ocorrer e, em caso positivo, sua data. Caso mais de uma data seja possível, o evento deve ocorrer o mais cedo possível.

Entrada: A entrada contém vários casos de teste. A primeira linha de cada caso contém os inteiros N e D (1 ≤ N, D ≤ 50), o número de pessoas e o número de datas consideradas, respectivamente. As pessoas são numeradas de 1 a N. As próximas D linhas descrevem uma data considerada. Cada linha começa com a data na forma dia∕mes∕ano. A linha é seguida de N inteiros p1,p2,...,pN. O inteiro pi é 1 se a pessoa i pode comparecer na data considerada, ou 0 caso contrário. É garantido que as datas são sempre válidas, e não há zeros à esquerda. Além disso, as datas são dadas em ordem, do dia mais cedo para o dia mais tarde.

Saída: Para cada caso de teste, imprima uma linha contendo a data que o evento deve ocorrer, na forma dia∕mes∕ano, de maneira idêntica à da entrada. Caso não seja possível realizar o evento, imprima “Pizza antes de FdA” (sem aspas).
 
Exemplo de Entrada:			 	Exemplo de Saída:

4 4						5/10/2016
1/6/2016 0 0 1 0
12/7/2016 1 1 1 0
5/10/2016 1 1 1 1
25/12/2016 0 0 0 0
	

5 3						Pizza antes de FdA
20/9/2016 0 1 1 1 1
30/9/2016 1 0 1 1 1
1/10/2016 1 1 0 1 1
 */

let tempo = parseInt(gets());

hora = Math.trunc(tempo/3600);
minutos = Math.trunc((tempo%3600)/60);
segundos = (tempo%3600)%60;

console.log(hora+":"+minutos+":"+segundos);
