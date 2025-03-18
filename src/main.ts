import { mostrarArrayYObjetos } from './arraysYObjetos'
import { mostrarFunciones } from './funciones'
import { mostrarInterfacesYTipos } from './interfacesYTipos'
import './style.css'

import { nombre, mostrarTiposPrimitivos } from './tiposPrimitivos'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div ='card'>
    <div>
      ${mostrarFunciones()}
    </div>
    

    </div>
  </div>
`
