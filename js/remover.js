//aqui delega-se o event listener para o componente pai (a tabela) para
// incluir TRs adicionados posteriormente
var tabela = document.querySelector('#tabela-pacientes')
tabela.addEventListener('dblclick', function(event){
    console.log(event.target) //componente que foi clicado

    //adicionar efeito de fade out na linha
    event.target.parentNode.classList.add('fade-out')

    //esperar 500ms para apagar a linha
    setTimeout(function(){
        if (event.target.tagName == 'TD')
            event.target.parentNode.remove()
    }, 500)
})

// var pacientes = document.querySelectorAll('.paciente')
// pacientes.forEach(element => {
//     element.addEventListener('dblclick', function(){
//         console.log('clique duplo em '+element.querySelector('.info-nome').textContent)
//         element.remove() //mesmo que this.remove
//     })
// });