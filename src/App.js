
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Result from './components/Pages/Result/Result';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/result'>
            <Result/>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
