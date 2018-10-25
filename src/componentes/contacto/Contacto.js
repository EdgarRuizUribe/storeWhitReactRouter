import React from 'react'
import "./contacto.styles.css"

const Contacto = () => {
  return (
    <form>
      <legend>Formulario de contacto</legend>
      <div className="input-field">
        <label>Nombre</label>
        <input type="text" placeholder="tu Nombre"/>
      </div>
      <div className="input-field">
        <label>Email</label>
        <input type="email" placeholder="tu Email"/>
      </div>
      <div className="input-field">
        <label>Mensaje:</label>
        <textarea></textarea>
      </div>
      <div className="input-field enviar">
        <input type="submit" value="Enviar"/>
      </div>
    </form>
  )
}

export default Contacto;
