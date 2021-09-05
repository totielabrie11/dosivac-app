import { NavBar } from './components/NavBar/NavBar.js'
import './App.scss'
import './components/ItemListContainer/ItemListContainer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
function App() {

  /* const [montar, setMontar] = useState(true)
  console.log("🚀 ~ file: App.js ~ line 11 ~ App ~ montar", montar) */

  return (
    <>
      <BrowserRouter>

          <Route path="/">
            <NavBar/>
          </Route>

        <Switch>
            <Route exact path="/">
                <ItemListContainer/>
            </Route> 

            <Route exact path="/nosotros">
                <h1>Nosotros</h1>
            </Route>

            
             {/* <Route exact path="/category/:catId">
                <ItemListContainer/>
            </Route>

            <Route exact path="/detail/:itemId">
                <ItemDetailContainer/>
            </Route> 

            <Route exact path="/nosotros">
                <h1>Nosotros</h1>
            </Route>

            <Route exact path="/cart">
                <h1>Carrito - Proximamente</h1>
            </Route>

            <Route exact path="/detail">
                <ItemDetailContainer/>
            </Route>

             <Route path="*">
                <h1>404</h1>
            </Route>
            <Route path="*">
                <Redirect to="/"/>
            </Route> */}
        </Switch>
        
      </BrowserRouter>
    </>
  
)
}

  /* return (

    <>
      <NavBar/>
      <ItemListContainer />

      <button className="btn btn-dark d-flex container w-25 mb-2" onClick={()=>{setMontar(!montar)}}>montar/desmontar Contador</button>
    
      
    </>
 */



export default App;
