import logo from './logo.svg';
import './App.css';

//LIBREARIAS QUE HEMOS INSTALADO PREVIAMENTE LAS COLOCAMOS AQUI !!
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery"
import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle";
//IMPORTAMOS COMPONENTES

import MenuDepartamentos from './Components/MenuDepartamentos';
import CreateDepartamentos from './Components/CreateDepartamento';
import Departamentos from './Components/Departamentos';

//IMPORTAMOS EL Router
import  Router  from './Router';

function App() {
  return (
    <div className="App">

    <Router/>

    </div>
  );
}

export default App;
