const concluirTarefa = (atualiza, id) => {
    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    tarefaCadastradas[id].concluida = !tarefaCadastradas[id].concluida

    localStorage.setItem('tarefas', JSON.stringify(tarefaCadastradas))

    atualiza()
}


const BotaoConclui = (atualiza, id) => {
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'
    botaoConclui.addEventListener('click', () => concluirTarefa(atualiza, id))

    return botaoConclui

}




// const concluirTarefa = (evento) => {
//     const botaoConclui = evento.target // target é o alvo do evento 
//     const tarefaCompleta = botaoConclui.parentElement // parent pega o pai do botao ('li')

//     tarefaCompleta.classList.toggle('done') // togle executa a classe css retorna um booleano verdadeiro ou falso

// }



export default BotaoConclui