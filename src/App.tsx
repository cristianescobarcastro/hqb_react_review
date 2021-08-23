import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Inicio from './components/Inicio';
import Componente01 from './components/Componente01';
import Componente02 from './components/Componente02';


function App() {
  return (
    <div>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/"><button type="button">Inicio</button></Link>
          </li>
          <li>            
            <Link to="/componente01"><button type="button">Componente01</button></Link>
          </li>
          <li>
            <Link to="/componente02"><button type="button">Componente02</button></Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
          <Inicio/>
          </Route>
          <Route path="/componente01">
            <Componente01/>
          </Route>
          <Route path="/componente02">            
           <Componente02/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;



