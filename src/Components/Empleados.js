import React, { Component } from 'react';
import axios from "axios";
import Global from '../Global';
import { NavLink } from 'react-router-dom';
export default class Empleados extends Component {
    state = {
        empleados: [],
        status: false
    }
    loadEmpleados = () => {
        var id = this.props.iddepartamento;
        var request = "/api/empleados/empleadosdepartamento/" + id;
        var url = Global.urlEmpleados + request;
        axios.get(url).then(response => {
            this.setState({
                empleados: response.data,
                status: true
            });
        });
    }
    componentDidUpdate = (oldProps) => {
        if (oldProps.iddepartamento != this.props.iddepartamento){
            this.loadEmpleados();
        }
    }
    componentDidMount = () => {
        this.loadEmpleados();
    }
  render() {
    return (
        <div>
            <h1>
                Empleados {this.props.iddepartamento}
            </h1>
            <ul>
                {
                    this.state.status == true && 
                    this.state.empleados.map((empleado, index) => {
                        return (<li key={empleado.idEmpleado}>
                            {empleado.apellido}
                        </li>);
                    })
                }
            </ul>
        </div>
    )
  }
}