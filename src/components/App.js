import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../utils/helper';

class App extends Component {

  state = {
    resultado: '',
    datos: {}
  }

  cotizarSeguro = (datos) => {
    const {marca, plan, year } = datos;

    //Base de  2000 pesos
    let resultado = 2000;

    //Obtener la diferencia de anios y por cada anio restar 3% al valor
    const diferencia = obtenerDiferenciaAnio(year);

    resultado -= ((diferencia * 3) * resultado) / 100;

    //Americano 15%, Asiatico 5% y Europeo 30% de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;

    //el plan de auto, el basico incrementa 20% y el completo 50%
    let incrementoPlan = obtenerPlan(plan);

    //dependiendo del plan incrementar
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    this.setState({
      resultado,
      datos
    });


  }

  render() {
    return (
      <div className="contenedor">
        <Header title= 'Cotizador de seguro de auto'/>

        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro}/>
        </div>
      </div>
    );
  }
}

export default App;
