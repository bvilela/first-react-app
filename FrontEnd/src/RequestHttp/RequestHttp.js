import React, { Component } from 'react';

const axios = require('axios').default;

export default class RequestHttp extends Component {
	//let result = [];
	
	render() {
		
		// Make a request for a user with a given ID
		axios.get('https://jsonplaceholder.typicode.com/todos/3')
			.then(function (response) {
				// handle success
				console.log(response);
				console.log(response.data);
				//result = response.data
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
		  
		return (
			<div>
				<p>Request Http</p>
			</div>
		);
	}
}