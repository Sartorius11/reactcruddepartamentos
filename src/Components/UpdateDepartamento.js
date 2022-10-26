import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';


export default class UpdateDepartamento extends Component {
    cajaNumeroRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaLocalidadRef = React.createRef();

    state={
        departamento:{},
        status:false
    }
    buscarDepartamentos= () =>{
        var id = this.props.id;
        var request= "/api/departamentos/"+ id;
        var url = Global.urlDepartamentos+ request;
        console.log(url);
        axios.get(url).then(reponse=>{
            this.setState({
                departamento: reponse.data,
               
            });
        });
    }

    UpdateDepartamento = (e) =>{
        e.preventDefault();
        var num =parseInt(this.cajaNumeroRef.current.value);
        var nom = this.cajaNombreRef.current.value;
        var loc = this.cajaLocalidadRef.current.value;

        var data= {
            numero: num,
            nombre: nom,
            localidad: loc
        };  
       

        var request='/api/departamentos';
        var url= Global.urlDepartamentos+request;
        axios.put(url,data).then(reponse=>{
          
            this.setState({
                status: true,
                mensanje: "Departamento modificado!"
                
            });
        });

    }

    componentDidMount=()=>{
        this.buscarDepartamentos();
    }

  render() {
    return (

      <div>
        <h1>UpdateDepartamento</h1>
        {
            this.state.status &&
            (<h1 style={{color:"blue"}}>{this.state.mensanje}</h1>)
        }


        <form style={{width:"60vw", margin:"auto"}}>
            <input type="hidden" ref={this.cajaNumeroRef} defaultValue={this.state.departamento.numero}/><br/>


            <label>Nombre: </label>
            <input type="text" className='form-control' 
            placeholder={this.state.departamento.nombre} ref={this.cajaNombreRef}/><br/>
       


            <label>Localidad: </label>
            <input type="text"  className='from-control' placeholder={this.state.departamento.localidad}ref={this.cajaLocalidadRef}/><br/>
            <br/>
                <hr/>

            <button className = 'btn btn-info' onClick={this.UpdateDepartamento}>
                Modificar departamento
            </button>


        </form>
      </div>
    )
  }
}
