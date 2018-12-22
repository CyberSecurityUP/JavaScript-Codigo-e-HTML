//*Introdução
//JS é CLIENT-SIDE
//ELE QUE FAZ A ITERAÇÃO 


//alert("Olá mundo!");

//*Comentário*//

//É o que não será executado no código 
//Comentário de várias linhas
//a a*/

//Variavel//

//É o espaço da memória que armazeno uma informação, e ela não tem valor fixo
//VAR (VARIAVEL) MENSAGEM (NOME DA VARIAVEL) = (ATRIBUI) "OLA MUNDO" (VALOR DA VARIAVEL)
//var mensagem = "Olá mundo!";
//Vou setar o alert com nome da minha váriavel, e ele mostra a informação dentro da variavel
//alert(mensagem);

//Operação matématica//
/*var a = 2;
var b = 3;

var soma = a+b;
var sub = a-b;
var mult = a*b;
var div = a/b;
*/

//Você pode qualquer nome na variavel, sem caracteres especiais, só letras e números não começando com 1

/*alert("O valor da soma é: " + soma);
alert("O valor da subtração é: " + sub);
alert("O valor da multiplicação é: " + mult);
alert("O valor da divisão é: " + div);
*/

//Estrutura condicionais//
//Ela verifica se um trecho de código está de acordo a uma determinada condição//
 //Exemplo de módulo//
 //Módulo é o resto de divisão//
 //alert(3%2);
 //Ele dá 1
 //alert(9%2);
 //Ele dá 1 também, porque é o resto da divisão, ou seja, se eu fizer divisão de 9 por 2 ele tem o valor inteiro de 4 resto 1
 //alert(9%3);
 //Vai dar 3 resto 0, então módulo é 0//
 //Então vamos fazer uma estrutura pra ver se o numero é par ou impar, então se for impar é 1, pq a divisão dele por 2 é 1, agora se for par é 0//
 //O JAVASCRIPT ACEITA A QUEBRA DE LINHA EM VEZ DE (;)//
 
 //ENTÃO VAMOS CRIAR O CÓDIGO DO NÚMERO PAR E IMPAR//
 
 //Peguei a variavel b e dividindo por 2, e se o resto for == (igual) (comparação), pois o = (atribuição)
 //Então abro chaves e jogo um alert, e coloco que é número impar.
 /*var a = 2;
 var b = 3;
 var c = "Olá mundo";
 if (c%2 == 1){
	 alert("Número impar")
 }
//Se eu testasse o valor de B iria com sucesso, agora o de A nada ocorre, pois não é o resultado exato
//Mas existe uma palavra, para que ele executa outro código, caso não sua condição if seja falsa ou falhe
else if (a%2 == 0){
	alert("Número par");
}
else {
	alert("Invalido")
}
*/
//Agora vou criar uma 3 variavel que é C e mudar no if
//Porém ele deu número par, mas não é, isso ocorreu porque como o IF é (FALSO) ou (FALHOU) ele foi até o ELSE.

//Mas eu posso mudar isso adicionando else if entre os 2 e fazendo outro teste.
//E ai se o if não for ele vai pro, else if e se não for, ele vai pro else.

//Estrutura de repetição, repete um bloco de código enquanto ela for verdadeira
//Entao temos a estrutura While, é o que repete o código enquanto a condição for valida

/*var i = 0;

while (i < 3){
	alert(i);
	i = i+1;
}
*/
//Então, enquanto i for menor que 3 ele vai continuar, porém o i vale 0 e com isso é menor que 3 e ele não vai sair disso
//Então tem que atribuir um valor, para que cada rodada ele receba um valor, então na primeira ele vale 0 e ai ele vai acrescentar 0+1 que dá 1 ai depois 1+1 que da 2 e etc...
//Quando der 3 ele para

//Laço for, ele executa para uma determinada condição 
//var j; ou
//Primeiro valor var j = 0, partindo de 0
//Segundo comando é a condição, de quanto em quantot estar
//Terceiro valor j++ que ai cada j vale 1, 2, 3 e etc... Resumindo o comando i = i+1;
/*for (var j = 0; j < 3; j++){
	alert(j)
}
*/

//Tipo de Dados em JavaScript 
//Inteiro (var numero = 6;)
//Flutuante ou decimal (var decimal = 4.5;)
//Tipo String (var texto = "Ola mundo";)
//Lista, são sequencias de dados ou famoso arrays (var lista = ["Laranja", "maçã", "banana"];)


//Arrays
//Para ter o valor de uma lista, a gente usa
//alert(lista[0]); Na computação sempre começa a contagem do 0, então 0 é o primeiro elemento.
//alert(lista[1]); Segundo elemento
//Alert(lista[2)); Terceiro elemento 
//Agora se eu quiser pegar todos eu uso o for 
/*for (i in lista){
	alert(i);
}
//Ele imprime a quantidade de elemento, então se temos 3 elemento ele começa do 0 a 2
//Agora se eu quero pegar um determinado elemento usando o for 
/*for (i in lista){
	alert(lista[i]);
}
//Ele imprime cada valor
*/

//Console.log 
//Aprendemos a mandar mensagem via alert, mas existe outro comando que é menos incomodo que o alert, em vez de aparecer uma janela.
//Então tem outro que não faz isso
//console.log("olá mundo");
//Ele exibe no log no console do navegador, que fica no inspecionar elemento.

//Funções
//São blocos de códigos, que são executados quando chamados.
//Então para criar use

/*function soma(a, b){

//Essas 2 funções recebera 2 variavel, tanto A e B e ira efetuar a soma.
//Então coloque
//console.log(a+b);
//}
//Agora só chamar a função
//soma(2, 2);

//E agora execute.
//Você pode criar um retorno de dados
//Lembrando que são locais, as suas variaveis só vale dentro daquele bloco de código.
*/
/*funcion subtracao(a, b){
	return a-b;
}

subtracao(5, 3);

Nada ocorre, pq o return só retorna o valor da subtracao, e ai deve aplicar em outra variavel

var s = subtracao(5, 3);
console.log(s);

//Então só tera blocos que serão ativados se for chamados.
*/
/*function multiplicacao(a,b){
	return a*b;
}
console.log(multiplicacao(5, 5));
Ele vai executar em partes, ele vai chamar a funcao, multiplicar 5x5, vai retornar o resultado e jogar no console.log 
Uma funcao deve retornar valores.
*/
//Eventos
//É interagir meu código com minha página html
//Por exemplo: Criar um Button no HTML 
//Quando eu crio <button>clique aqui</button> e clico nele, nada ocorre, e ai eu preciso criar um evento
//Então eu tenho varios tipos de eventos como por exemplo:
//<button onclick="">Clique aqui</button>
//Quando clicar no Button ele executa alguma coisa
//Então eu crio uma função no meu código javascript
/*function mensagem(){
	alert("Não clique em mim");
}
*/
 
//Ai eu vou no meu HTML no <button onclick="mensagem()">Clique aqui</button> E coloco a função no onclick="function"
//Também posso passar um parametro em mensagem('') mas com aspas simples por exemplo:
//mensagem('NOME') e ai eu faço concatenação no código javascript na função
/*function mensagem(nome){
	alert("Não clique em mim"+nome);
}
*/
//Ai ele vai dar a mensagem não clique em mim, e vai pegar o nome no onclick="mensagem('nome de alguem') e mostrar no alert
//Eu posso criar outro evento como o onmouseover, que é para quando passar o mouse você não precisa clicar só passar o mouse em cima.
//<button onmouseover="uma função ou algo do tipo">Clique aqui</button>
//Se eu colocor onmou ele te da algumas opções e você pode ir testando
//O onmouseleave quando você coloca o mouse em cima nada ocorre, mas quando você tira ele executa o evento
//Então eventos é interação com meu código HTML e o JavaScript, e você pode pesquisar por vários eventos no Google
//Outro exemplo é onload que carrega quando a pagina é carregada
//Então você joga ou no HEAD ou no BODY o seguinte código: onload="funcao()"> exemplo usado:<body onload="mensagem('nome de alguem')">

//DOM (MODELO DE OBJETO DE DOCUMENTO)
//É uma interface que representa objetos agéis HTML, quando uma página HTML é lida pelo Browser, ele pega cada elemento HTML e permitir que você navegue em cada elemento como se fosse uma arvore.
//Exemplo prático
//<span id="mensagem">olá mundo!</span>
//Ele vai criar essa mensagem e criar 2 botões
//<button>Azul</button>
//<button>Vermelho</button>
//Então terá 2 buttons e ai eu quero que quando clicar em azul o texto fique na cor azul e em vermelho a cor vermelha
//Então eu crio o evento onclick, e criar funcao mudar cor
//<button onclick="mudarCor('blue')">Azul</button>
//<button onclick="mudarCor('red')">Vermelho</button>
//Agora cria a função

/*function mudaCor(cor){
//Mas antes vamos navegar pelo dom e pegar o ID do elemento o identificador, então crie a primeira variavel
//var elemento = document.getElementById(ID do <span>)
//Variavel elemento, ele vai navegar pelo documento e pegar o Elemento ID, e coloca o ID que você quer que no caso é o mensagem criado no <span>
	var elemento = document.getElementById("mensagem");
//Navegando pelo DOM, pegou o ID e armazenando na Variavel
//Agora pegar a cor
	elemento.style.color = cor;
//Chama o Elemento, usa o metodo estilo que altera o estilo, e usa a propriedade color, que vai receber um novo valor, enviado pelo valor cor.
}
*/

//E ai ele muda as cores.
//Posso alterar as propriedade por exemplo:
/*function mudaCor(cor){
		var elemento = document.getElementById("mensagem");
		elemento.style.backgroundColor = cor;
}
//Ele muda a cor de fundo
//Isso não funciona como método
*/

/*Posso também alterar outras propriedade como fontSize
function mudaCor(cor){
		var elemento = document.getElementById("mensagem");
		elemento.style.fontSize = "100px";
}
*/

//Simples validação de formulário
//Então crie um formulário
//<input type="text" name="nome" id="nome" placeholder="Insira seu nome aqui"/>
//<input type="submit" onclick="valida()">
//Esse formulário vai validar se meu campo de texto está vazio, se não tiver vazio vai considerar que funcionou e submeter meu formulário
//Então crie a funcao valida

/*function valida(){
//Então pegue o elemento do campo id="nome"
//Então crie a variavel nome
	var nome = document.getElementById('nome');
//Agora pegue o valor nome 
//Pois se eu só imprimir o valor nome, ele imprime o objeto e não valor que inserir.
//Então eu coloco o atributo nome.value, para imprimir o nome que eu inserir
	alert(nome.value);
//Esse formulário via POST 
//Agora vamos validar
	if (nome.value == ""){
		alert("Campo nome não pode ser enviado em branco");
	}
	else {
		alert("Nenhum problema detectado, seu formulário pode ser enviado");
	}
}
//Então é assim que valida valores usando javascript
*/