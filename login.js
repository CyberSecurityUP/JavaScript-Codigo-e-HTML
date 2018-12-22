//Criou a Função valida, que é o valor onclick no código html
function valida(){
//Abriu as variaveis do campo nome  e senha, e usou o DOM para ler o conteúdo html e catar o id nome e senha do formulario, e jogou o campo valor pra mostrar o valor	
var nome = document.getElementById('nome').value;
var senha = document.getElementById('senha').value;
//Abriu uma estrutura de condição, si nome for admin e a senha for 123 ele é validado
if (nome == "admin" && senha == "123"){
		alert("Bem vindo!");
		windows.location = "www.facebook.com";
	}
//Caso ao contrário se for diferente ele da incorreto
else {
		alert("Senha incorreta");
	}
}
	