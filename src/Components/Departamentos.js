import React, { Component } from 'react'
//IMPORTAMOS Axios para leer los doumentos JSON
import axios from 'axios'
import Global from './../Global';
//importamos la imagen
import loading from './../assets/images/loading.gif'

export default class Departamentos extends Component {

  state={
    departamento: [],
    status: false
  }


  render() {
    //ESTO ES CODIGO JAVASCRIPT
    if(this.state.status==false){
      //LOADING
      return(<div>
        <img src={loading}/>
      </div>)

    }else{
      //Pintamos nuestro DIBUJO
      return(
        <div>
          <h1>Departamentos</h1>
        </div>
      )
    }

  }
}
