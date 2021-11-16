import { ordenaDatas, removeDatasRepetidas } from "../service/data.js"
import { criaData } from "./criaData.js"



export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]')

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []

    lista.innerHTML = "" // limpa o valor do imput porque chama 2x o carregaTarefa
    const datasUnicas = removeDatasRepetidas(tarefasCadastradas)
    ordenaDatas(datasUnicas)
    datasUnicas.forEach((dia) => {

        lista.appendChild(criaData(dia));
    })
}



// lista.appendChild(criaData(dia));
// acessar a li dentro de um elemento pai
// o appendchild sempre coloca o conteudo por ultimo