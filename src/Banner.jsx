import React from 'react'

const Banner = () =>(
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
)
export default Banner;
