import React from 'react';
import PropTypes from 'prop-types';

export default class DizerOi extends React.Component {
	render() {
		//return <p>Oi!</p>;
		//this.props.nome = "Fulano"; // ERRO Cannot assign to read only property 'nome' of object '#<Object>'
		return <p>Olá {this.props.nome}!</p>;
	}
}

//isso define que obrigatoriamente tenho q passar o props nome
//Se nao passar, vai dar erro no console: "index.js:1375 Warning: Failed prop type: The prop `nome` is marked as required in `DizerOi`, but its value is `undefined`"

//Devemos sempre ter em mente que _props_ são IMUTÁVEIS, uma vez definida a _prop_ ‘nome’, uma instância de HelloWorld não pode mais ser alterada
DizerOi.propTypes = {
	nome: PropTypes.string.isRequired
}