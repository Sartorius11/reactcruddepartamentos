import React, { Component } from 'react'


//import Route ,BrowserRouter,Routes
import { Route,BrowserRouter, Routes } from 'react-router-dom';

//import useParams
import { useParams } from 'react-router-dom';

//importamos los compentes seleccionados (DINAMICOS)
import Departamentos from './Components/Departamentos';
import CreateDepartamento from './Components/CreateDepartamento';

//ELEMENTO ESTATICO
import MenuDepartamentos from './Components/MenuDepartamentos';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <MenuDepartamentos/>

        <Routes>

            <Route path='/' element={<Departamentos/>}/>
            <Route path='/create' element={<CreateDepartamento/>}/>

        </Routes>
      </BrowserRouter>
    )
  }
}
