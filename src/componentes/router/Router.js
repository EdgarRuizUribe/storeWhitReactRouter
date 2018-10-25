import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../header/header";
import Navegacion from "../navegacion/Navegacion";
import Productos from "../productos/Productos";
import SingleProducto from "../singleProducto/SingleProducto";
import Nosotros from "../nosotros/Nosotros";
import Contacto from "../contacto/Contacto";
import Error from "../error/Error";
import infoProductos from "../../datos/datos.json";
class Router extends Component {
  state = {
    productos: [],
    keybuscar: ""
  };

  componentWillMount() {
    this.setState({
      productos: infoProductos
    });
  }
  busqueda= buscar => {
    if(buscar.length > 0){
      this.setState({
        keybuscar: buscar
      })
      
    }
    else{
      this.setState({
        keybuscar:""
      })
    }
  }
  render() {

    const productos= [...this.state.productos];
    const keybuscar= this.state.keybuscar;
    let resultado;

    if(keybuscar!== ""){
      resultado= productos.filter(producto => (
        producto.nombre.toLowerCase().includes(keybuscar.toLowerCase())
      ))
    }else{ resultado=productos }
    return (
      <BrowserRouter>
        <div className="contenedor">
          <Header />
          <Navegacion />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Productos 
                              productos={resultado}
                              busqueda={this.busqueda}
                            />
              }
              
            />
            <Route
                exact
                path="/productos"
                render={() => (<Productos 
                                  productos={resultado}
                                  busqueda={this.busqueda}
                                />
                              )
                }
            />
            <Route
              exact
              path="/producto/:idProducto"
              render={producto => {
                const idLocation = producto.location.pathname.replace(
                  "/producto/",
                  ""
                );
                return (
                  <SingleProducto
                    productos={this.state.productos[idLocation]}
                  />
                );
              }}
            />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/contacto" component={Contacto} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
