import BotaoConclui from "./assets/componentes/concluiTarefa.js";
import BotaoDeleta from "./assets/componentes/deletaTarefa.js";

const handleNovoItem = (evento) => {
    evento.preventDefault();

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

    const criaTarefa = criarTarefa(dados)

    lista.appendChild(criaTarefa);
    // acessar a li dentro de um elemento pai
    // o appendchild sempre coloca o conteudo por ultimo


    input.value = '';

}


const criarTarefa = ({ valor, dataFormatada }) => {
    const tarefa = document.createElement('li');
    //cria o elemento li dentro do html

    tarefa.classList.add('task') // adiciona a classe css ao elemento 


    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    return tarefa

};

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', handleNovoItem);


// proteção do codigo
// (() => { todo meu codigo aqui })()