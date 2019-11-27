import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	  <h1>Meu primeiro app em React</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
		  <Button component={ Link } to="/sobre" variant="contained" color="primary" className="mr-40"> Sobre </Button>
		  <Button component={ Link } to="/exemplos" variant="contained" color="primary" className="mr-40"> Exemplos </Button>
		  <Button component={ Link } to="/request-http" variant="contained" color="primary"> Exemplos </Button>
		  <br/>
		  <br/>
		  <br/>
		  <Link to="/exemplos">Ir para a página Exemplos Componentes </Link>
		  <br/>
		  <br/>
		  <Link to="/sobre">Ir para a página sobre </Link>
		  <br/>
		  <br/>
          Edit <code>src/App.js</code> and save to reload :)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
