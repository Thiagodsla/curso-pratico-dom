const deletarTarefa = (atualiza, id) => {
    const index = id
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    tarefasCadastradas.splice(index, 1)
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
    atualiza()
}


const BotaoDeleta = (atualiza, id) => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'deletar'
    botaoDeleta.classList.add('delete-button')
    botaoDeleta.addEventListener('click', () => deletarTarefa(atualiza, id))

    return botaoDeleta // return para utilizar a chamada em outra funçao
}



// const deletarTarefa = (evento) => {
//     const botaoDeleta = evento.target

//     const tarefaCompleta = botaoDeleta.parentElement // pega a li toda para deletar
//     tarefaCompleta.remove() // remove o nó da arvore
//     return botaoDeleta
// }


export default BotaoDeleta