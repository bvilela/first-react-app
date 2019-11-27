import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sobre from './Sobre';
import NaoEncontrada from './NaoEncontrada';
import ExemplosComponents from './ExemplosComponents';
import RequestHttp from './RequestHttp/RequestHttp'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom' // importando o BrowserRouter do pacote react-router-dom (npm install --save react-router-dom)

ReactDOM.render(
	<BrowserRouter>
		<Switch>
            <Route path="/" exact={true} component={App} />
			<Route path="/exemplos" component={ExemplosComponents} />
			<Route path="/sobre" component={Sobre} />
			<Route path="/request-http" component={RequestHttp} />
			<Route path='*' component={NaoEncontrada} /> 
			{/*
				Uma outra parada legal do path, é que se passarmos um Route com o path sendo um * 
				após o último route (em nosso caso após o Route do sobre),
				podemos ter uma rota que representa a página 404 do nosso sistema.
			*/}
		</Switch>
    </ BrowserRouter>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
