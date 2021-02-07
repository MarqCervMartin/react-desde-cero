import React from 'react'
import PropTypes from 'prop-types'

const Curso = ({title, image, price, profesor}) => (
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={image} alt={title}/>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="center">{title}</h3>
        <div className="s-main-center">
          {`Prof.: ${profesor}`}
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="#">{`$ ${price}`}</a>
        </div>
      </div>
    </article>
)
Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string
}
Curso.defaultProps = {
  title: "No se encontro título",
  image: "https://edteam-media.s3.amazonaws.com/courses/original/440bf729-4f2b-49a6-a0c7-7cf65a8bd31b.png",
  price: "--",
  profesor: " "
}
export default Curso;
