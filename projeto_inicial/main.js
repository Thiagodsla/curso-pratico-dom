import BotaoConclui from "./assets/componentes/concluiTarefa.js";
import BotaoDeleta from "./assets/componentes/deletaTarefa.js";


const criarTarefa = (evento) => {
    evento.preventDefault();

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    //criar o elemento li dentro do html
    tarefa.classList.add('task')
        // adiciona a classe ao elemento 
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);

    // acessar a li dentro de um elemento pai
    // o appendchild sempre coloca o conteudo por ultimo

    input.value = '';

};

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);


// proteção do codigo
// (() => { todo meu codigo aqui })()