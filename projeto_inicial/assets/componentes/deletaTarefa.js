const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'deletar'
    botaoDeleta.classList.add('delete-button')
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta // return para utilizar a chamada em outra funçao
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target

    const tarefaCompleta = botaoDeleta.parentElement // pega a li toda para deletar
    tarefaCompleta.remove() // remove o nó da arvore
    return botaoDeleta
}


export default BotaoDeleta