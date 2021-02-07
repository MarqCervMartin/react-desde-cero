import React, {Fragment} from 'react'
import "./styles/styles.scss"
import Curso from './Curso'

const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img alt="Banner" className="main-banner__img" src="https://s22.com.mx/revista/wp-content/uploads/2017/10/5886808-one-punch-man-wallpaper-hd.jpg"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Entendiendo REACT</p>
          <p> Hola banner</p>
          <a href="https://ed.team" className="button">Dale click</a>
        </div>
      </div>
    </div>
  </div>
  <div className="ed-grid m-grid-3">
    <Curso
    />
  </div>
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
