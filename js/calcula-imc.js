var titulo = document.querySelector(".titulo");
titulo.textContent = 'Mudando h1 pelo script';

//Acessando e alterando elementos
var row = document.querySelector('#primeiro-paciente')
var data = row.querySelector('.info-peso')
var peso = data.textContent
console.log(row)
console.log(data)
console.log(peso)

var altura =
    document.querySelector('#primeiro-paciente')
    .querySelector('.info-altura')
    .textContent
console.log(altura)
    
var tdImc =
    document.querySelector('#primeiro-paciente')
    .querySelector('.info-imc')
    // .textContent
//imc.textContent = peso / (altura*altura)
console.log(tdImc.textContent)

if(pacienteValido({nome: nome, peso: peso, altura: altura})) {
   var imc = peso / ( altura * altura);
   tdImc.textContent = imc
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}

//Acessando e alterando com loops
pacientes = document.querySelectorAll('.paciente')
console.log(pacientes)
for (var i=0; i<pacientes.length; i++) {
    var paciente = pacientes[i]
    
    var tdPeso = paciente.querySelector('.info-peso')
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector('.info-altura')
    var altura = tdAltura.textContent

    var tdImc = paciente.querySelector('.info-imc')
    if(pacienteValido({nome: nome, peso: peso, altura: altura}).length > 0) {
        tdImc.textContent = 'Peso ou Altura inválidos.'
        //paciente.style.color = 'red'
        //paciente.style.backgroundColor = 'red'
        //É uma boa prática só mexer com estilo pelo arquivo css.
        //Criar uma classe de erro lá e adiciona no td aqui
        paciente.classList.add('paciente-invalido')
    } else {
        tdImc.textContent = calcularIMC(peso,altura)
    }
}

function calcularIMC(peso, altura) {
    var imc = peso / (altura*altura)
    return imc.toFixed(2)
}

function pacienteValido(paciente){
    var erros = []
    if(!pesoValido(paciente.peso))
        erros.push('Peso inválido')
    if(!alturaValida(paciente.altura))
        erros.push('Altura inválida')
    if(paciente.nome.length == 0)
        erros.push('Nome em branco')
    return erros
}
function pesoValido(peso){
    if(peso < 1000 && peso > 0)
        return true
    return false
}

function alturaValida(altura){
    if(altura < 3.0 && altura > 0)
        return true
    return false
}