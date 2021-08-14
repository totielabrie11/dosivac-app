import { NavBar } from './components/NavBar/NavBar.js'
import './App.scss'
import './components/ItemListContainer/ItemListContainer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
