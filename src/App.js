import './App.css';
import {BrowserRouter,Route} from "react-router-dom"
import LoginPage from './Pages/LoginPage';
import RegistroPage from "./Pages/RegistroPage"
import Menu from './Components/Menu';
import InicioPage from './Pages/InicioPage'
import ProductoPage from './Pages/ProductoPage';


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Route path="/" exact component={InicioPage} />
      <Route path="/alta" exact component={RegistroPage} />
      <Route path="/ingresar" exact component={LoginPage} />
      <Route path="/productos" exact component={ProductoPage} />


    </BrowserRouter>

  );
}

export default App;
