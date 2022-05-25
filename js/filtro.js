filtro = document.querySelector('#filtrar-tabela')

filtro.addEventListener('input', function(){
    //console.log(filtro.value)
    var pacientes = document.querySelectorAll('.paciente')
    if(filtro.value.length > 0){
        for (var i=0; i < pacientes.length; i++){
            var nome = pacientes[i].querySelector('.info-nome').textContent
            var expRegular = new RegExp(filtro.value, 'i') //flag 'i' indica para ser caseInsensitive
            if(expRegular.test(nome))
                pacientes[i].classList.remove('invisivel')
            else
                pacientes[i].classList.add('invisivel')
        }
    } else {
        for (var i=0; i < pacientes.length; i++){
            pacientes[i].classList.remove('invisivel')
        }
    }
})