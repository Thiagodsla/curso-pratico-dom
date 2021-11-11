const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'
    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui

}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target // target é o alvo do evento 
    const tarefaCompleta = botaoConclui.parentElement // parent pega o pai do botao ('li')

    tarefaCompleta.classList.toggle('done') // togle executa a classe css retorna um booleano verdadeiro ou falso

}



export default BotaoConclui