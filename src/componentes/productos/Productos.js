import React, { Component } from "react";
import Producto from '../producto/Producto';
import Buscador from "../busqueda/Busqueda"
import "./ProductosStyles.css";

export default class Productos extends Component {
  render() {
    return (
      <div className="productos">
        <Buscador
          busqueda={this.props.busqueda}
        />
        <ul className="lista-productos">
          {Object.keys(this.props.productos).map(producto => (
            <Producto
              key={producto}
              informacion={this.props.productos[producto]}
            />
          ))}
        </ul>
      </div>
    );
  }
}
