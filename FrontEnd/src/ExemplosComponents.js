import React, { Component } from 'react';
import './App.css';

import HelloWorld from './HelloWorld';// nosso primeiro componente React!
import DizerOi from './DizerOi';// nosso primeiro componente React com parametros!
import DizerOiFuncaoPura from './DizerOiFuncaoPura'; //componente funcao pura
import ContaClick from './ContaClick'; //componente com state

class ExemplosComponents extends Component {
	render() {
		const nomes = ["Lucas", "Marcos", "Maria", "João", "Ana"];
		
		return (
			<div>
				<HelloWorld/>
				<DizerOi nome="Nome 1 (estou usando props no compoente)"/>
				<DizerOi nome="Nome 2 (estou usando props no compoente)"/>
				<DizerOiFuncaoPura nome="Teste (componente Função Pura)"/>
				
				<br/>
				<p>Fazendo um "for" no componente</p>
				{ nomes.map((n, i) => <DizerOiFuncaoPura nome={n} key={i}/>) }
				
				<br/>
				<br/>
				<h1>Contador (Componente com state)</h1>
				<ContaClick />
			</div>
		);
	}
}

export default ExemplosComponents;
