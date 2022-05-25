botao = document.querySelector('#adicionar-paciente')
botao.addEventListener('click', function(event){
    event.preventDefault()

    var form = document.querySelector('#form-adiciona')
    var paciente = montarObjPaciente(form)
    var pesovalido = pesoValido(paciente.peso)
    var alturavalida = alturaValida(paciente.altura)
    var erros = pacienteValido(paciente)
    if(erros.length == 0){
        adicionarPacienteNaTabela(paciente)
        //também poderia acessar as variáveis do form assim:
        //var nome = document.querySelector('#nome')
        ul = document.querySelector('#msg-erro')
        ul.innerHTML = ""
    } else {
        exibirMensagensDeErro(erros)
        console.log('paciente inválido')
    }

    //form.reset() //limpar formulario
})


/* outro jeito de adicionar evento ao botão é alterando a propriedade dele:
    botao.onclick = mostrarMsg;
    botao.onmouseover = mostrarMsg;
*/
/*
com função não anônima:
    botao.addEventListener('click', mostrarMsg)
    function mostrarMsg(event){
        event.preventDefault()
        console.log('botao clicado')
    }
*/

/*
outro tipo de função anônima:
    botao.addEventListener('click', (event) => {...}
*/

function adicionarPacienteNaTabela(paciente){
    var trPaciente = criarTableRow(paciente)
    tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(trPaciente)
}

function montarObjPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value,form.altura.value),
    }
    return paciente
}

function criarTableRow(paciente) {
    trPaciente = document.createElement('tr')
    trPaciente.classList.add('paciente')

    tdNome = criarTableData(paciente.nome,'info-nome') //td nome criado pela função

    //td's criados manualmente
    tdAltura = document.createElement('td')
        tdAltura.classList.add('info-altura')
    tdGordura = document.createElement('td')
        tdGordura.classList.add('info-gordura')
    tdImc = document.createElement('td')
        tdImc.classList.add('info-imc')

    tdAltura.textContent = paciente.altura
    tdGordura.textContent = paciente.gordura
    tdImc.textContent = paciente.imc

    trPaciente.appendChild(tdNome)
    trPaciente.appendChild(criarTableData(paciente.peso,'info-peso')) //td peso criado diretamente no append pela função
    trPaciente.appendChild(tdAltura)
    trPaciente.appendChild(tdGordura)
    trPaciente.appendChild(tdImc)
    
    return trPaciente
}

function criarTableData(dado, classe) {
    td = document.createElement('td')
    td.classList.add(classe)
    td.textContent = dado
    return td
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


function exibirMensagensDeErro(erros){
    ul = document.querySelector('#msg-erro')
    ul.innerHTML = ""
    erros.forEach(element => {
        li = document.createElement('li')
        li.textContent = element
        ul.appendChild(li)
    });
}