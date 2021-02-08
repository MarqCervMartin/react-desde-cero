import React, {Fragment} from 'react'
import "./styles/styles.scss"
import Curso from './Curso'
import Banner from './Banner'
import Formulario from './Formulario'


const App = () => (
  <>
  <Banner/>
  <Formulario/>
  
  </>
)

export default App;

/*
1 Regla : toda etiqueta debe cerrarse

2 Regla : Los componentes deben devolver un elemento padre

3 Regla: Apoyarse de los fragments cuando se necesita devolver dos elementos

4: Fragmen 

5: img siempre se cierra

6: class => className

7: for => htmlFor
*/
