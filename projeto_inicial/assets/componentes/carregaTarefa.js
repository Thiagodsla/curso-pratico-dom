import { Tarefa } from "./criaTarefa.js"

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]')

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []

    tarefasCadastradas.forEach((tarefa) => {
        lista.appendChild(Tarefa(tarefa));
        // acessar a li dentro de um elemento pai
        // o appendchild sempre coloca o conteudo por ultimo
    })
}