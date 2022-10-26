import React, { Component } from 'react'

import axios from 'axios';
import Global from '../Global';


//para redirigirnos a otros componentes ***
import { Navigate } from 'react-router-dom';

export default class CreateDepartamento extends Component {

//creamos obejtos de referencia
 cajaNumeroRef= React.createRef();
 cajaNombreRef = React.createRef();
 cajaLocalidadRef= React.createRef();



  state ={
    mesaje: "",
    status: false
  }


  insertDepartamento= (e) =>{
    e.preventDefault();

    var request= "/api/departamentos";
    var url = Global.urlDepartamentos+request;
    var numero = parseInt(this.cajaNumeroRef.current.value);
    var nombre = this.cajaNombreRef.current.value;

    console.log(nombre);

    var localidad = this.cajaLocalidadRef.current.value;


    //REACT YA PERMITE DECLARAR OBEJTOS CON FORMATO JSON
    //DECLARAMOS UNA VARIABLE UN OBEJTOS CON LAS PROPIEDADES DEL API JASON
    var departamento={
      numero: numero,
      nombre: nombre,
      localidad: localidad
    };

    //EN AXIOS el metodo post recibe dos parametros
    //1) url del api
    //2) obejto JSON PARA EL API
    axios.post(url,departamento).then(response=>{
     
      this.setState({
        status:true,
        mensaje:"Departamento insertado"

      });
    });
    


   

  }




  render() {
    if (this.state.status==true){
      //para redirigirnos a otros componentes ***AQUI
      return(<Navigate to="/" replace={true} />)
      
    }
   
    return (
      <div>
        <h1> Create Departamentos</h1>

        <form style={{width:"60vw", margin:"auto"}}>
            <label>Numero</label>
            <input type="number" className='form-control'
            ref={this.cajaNumeroRef} required/><br/>

            <label>Nombre</label>
            <input type="text"  className='form-control'
            ref={this.cajaNombreRef} required/><br/>

            <label>Localidad</label>
            <input type="text"  className='form-control'
            ref={this.cajaLocalidadRef} required/><br/>

            <button className=' btn btn-info' onClick={this.insertDepartamento}>
              Insertar Departamento
            </button>

            <h2 style={{color:"blue"}}>
              {this.state.mensaje}
            </h2>
        </form>
        </div>
    )
  }
}
