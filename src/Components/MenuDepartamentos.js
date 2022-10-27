import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';

export default class MenuDepartamentos extends Component {
  state = {
    departamentos: [],
    status: false
  }
  loadDepartamentos = () => {
    var request = "/api/departamentos";
    var url = Global.urlDepartamentos + request;
    axios.get(url).then(response => {
      this.setState({
        departamentos: response.data,
        status: true
      });
    });
  }
  componentDidMount = () => {
    this.loadDepartamentos();
  }
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">CRUD</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active"
                to="/">Departamentos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/create">Create</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Departamentos
                </a>
                <ul className="dropdown-menu">
                   {
                      this.state.status == true &&
                      this.state.departamentos.map((dept, index) => {
                        return (<li key={dept.numero}>
                          <NavLink to={"/empleados/" + dept.numero}
                          className="dropdown-item">
                            {dept.nombre}
                          </NavLink>
                        </li>);
                      })
                   }
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
