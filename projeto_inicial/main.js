import { handleNovoItem } from "./assets/componentes/criaTarefa.js"

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', handleNovoItem);


// proteção do codigo
// (() => { todo meu codigo aqui })()