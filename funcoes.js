function linha() {
	document.write("<hr></hr>")
}

function pulalinha() {
	document.write("<br>")
}

function imprima(texto) {
	document.write(texto)
	pulalinha()
}

function pegaNumero(mensagem) {
	return parseFloat(prompt(mensagem).replace(",","."))
}

function formataMoeda(valor) {
	return (valor).toFixed(2).replace(".",",")
}

function calcImc(peso,altura) { 
	return peso / (altura * altura)
}

// IMPRESSÃO DE FICHA DE ACADEMIA
function imprimeFicha(nome,idade,peso,altura,imc) {
	imprima("Nome: " + nome);
    imprima("Idade: " + idade);
    imprima("Peso: " + peso);
    imprima("Altura: " + altura);
    imprima("IMC: " + formataMoeda(imc));
}

function printElement(mensagem) {
    var campo = document.createElement("p");
    campo.innerHTML = mensagem;
    document.body.appendChild(campo)
}


function tempoViagem(distancia) {

	var velocidade = parseFloat(29.9);
	return (distancia/velocidade)*60
}

function calcUber(distancia) {

	var precoBase = parseFloat(2.00);
	var precoPorMinuto = parseFloat(0.26);
	var kmRodado = parseFloat(1.40);
	var precoMinuto = tempoViagem(distancia)
	return	precoBase+(precoPorMinuto*precoMinuto)+(kmRodado*distancia)
}

function calcGaso(gasolina,distancia,litro) {
	return gasolina*distancia/litro
}