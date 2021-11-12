import { handleNovoItem } from "./assets/componentes/criaTarefa.js"
import { carregaTarefa } from "./assets/componentes/carregaTarefa.js";

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', handleNovoItem);

carregaTarefa()


// proteção do codigo
// (() => { todo meu codigo aqui })()