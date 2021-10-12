
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  

  useEffect(() => {
    const params = {
      method: 'GET',
      app_id: 'test', 
      app_key: 'test', 
      format: 'json',
      headers: {
        'x-rapidapi-host': 'community-campbell.p.rapidapi.com',
        'x-rapidapi-key': 'c0e454d2c6msha3c43da1eb02203p1d2374jsn11455a1a8898'
      }
    }

    fetch('https://community-campbell.p.rapidapi.com/brandservice.svc/api/recipereviews/%7BrecipeID%7D', params)
    .then(res => res.json())
    .then(data => console.log(data));
  }, [])

  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer 
              greeting="Hola! gracias por visitarnos"
            />
          </Route>

          <Route path="/detalle/:pokemon">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
