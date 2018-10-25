import React, { Component } from "react";
import "./nosotros.styles.css"

class Nosotros extends Component {
    render(){
        return (
            <div className="contenedor-nosotros">
                <div className="content-img">
                    <img src="/img/reactRouter.jpeg" alt="react" className="imgNosotros"/>
                </div>
                <div className="content-text">
                    <h1>Edgar Ruiz uribe</h1>
                    <h3>edgarruizuri@gmail.com</h3>
                    <h3>DesarrolloWeb/FrontEnd</h3>
                    <p>Practica desarrollada por <strong>Edgar Ruiz Uribe </strong>
                        en un master de Udemy</p>
                    <h4>Octubre, 2018</h4>
                </div>
            </div>
        )
    }
}

export default Nosotros;