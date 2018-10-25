import React, { Component } from 'react'
import "./buscador.styles.css"

export class Busqueda extends Component {
    busqueda= e => {
        this.props.busqueda(e.target.value);
    }
  render() {
    return (
      <form className="buscador">
          <input type="text" placeholder="Buscar" onChange={this.busqueda} />    
      </form>
    )
  }
}

export default Busqueda
