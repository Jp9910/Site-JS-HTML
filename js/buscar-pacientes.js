//Request http assíncrono (ajax)

var botao = document.querySelector('#buscar-pacientes')

botao.addEventListener('click', function () {
    console.log('Buscando...')
    xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')
    xhr.addEventListener('load', function(){
        var spanErro = document.querySelector('#erro-ajax')
        if(xhr.status == 200){
            spanErro.classList.add('invisivel')
            var json = xhr.responseText
            var pacientes = JSON.parse(json) //tipo Object, classe Array
            pacientes.forEach(element => {
                adicionarPacienteNaTabela(element)
            })
        } else {
            spanErro.classList.remove('invisivel')
            console.log(xhr.status)
            console.log(xhr.responseText)
        }
    })
    xhr.send()

})

/**
 * pacientes.forEach(element => {
        adicionarPacienteNaTabela(element)
    })
    
    é igual:

    pacientes.foreach(function(element){
        adicionarPacienteNaTabela(element)
    })
 */