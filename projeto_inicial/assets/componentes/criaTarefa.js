import BotaoConclui from "./concluiTarefa.js";
import BotaoDeleta from "./deletaTarefa.js";



export const handleNovoItem = (evento) => {
    evento.preventDefault();

    const tarefas = localStorage.getItem('tarefas')
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]');
    const valor = input.value; // .value recebe o valor do input

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value) // .value recebe o valor do input

    const dataFormatada = (data.format('DD/MM/YYYY'))

    const dados = {
        valor,
        dataFormatada
    }

    const criaTarefa = Tarefa(dados)

    lista.appendChild(criaTarefa);
    // acessar a li dentro de um elemento pai
    // o appendchild sempre coloca o conteudo por ultimo

    localStorage.setItem('tarefas', JSON.stringify(tarefas))

    input.value = '';

}


export const Tarefa = ({ valor, dataFormatada }) => {
    const tarefa = document.createElement('li');
    //cria o elemento li dentro do html
    tarefa.classList.add('task') // adiciona a classe css ao elemento 

    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    return tarefa

};