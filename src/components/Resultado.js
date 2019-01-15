import React,{Component} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Resultado extends Component {
    render() {
        const resultado = this.props.resultado;
        const cssTimeout = {enter: 500, exit:500 };
        const mensaje = (!resultado) ? 'Elije Marca, Anio y Tipo de seguro' : 'El total es $';

        return(
            <div className="gran-total">
                { mensaje }
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition classNames="resultado" key={resultado} timeout={ cssTimeout }>
                        <span>{ resultado }</span>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}

export default Resultado;