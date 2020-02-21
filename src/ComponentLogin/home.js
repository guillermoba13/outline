import React, { Component } from 'react'
import FormLogin from '../ComponentLogin/formLogin';

export default class Home extends Component {
    busquedaRef = React.createRef();
    obtenerDatos=(e)=>{
        e.preventDefault();
        const termino = this.busquedaRef.current.value;
        this.props.dataBusqueda(termino);
    }
    render() {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input 
                            ref={this.busquedaRef}
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Buscar"
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" 
                            className="btn btn-lg btn-danger btn-block" 
                            value="Buscar.."
                        />
                    </div>
                </div>
            </form>
        );
    }
}
