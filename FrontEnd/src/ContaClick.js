import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import './ContaClick.css';

export default class ContaClick extends React.Component {
	constructor() {
		super();
		this.state = {
			clicks: 0
		}
	}
	
	soma = () => this.setState({clicks: this.state.clicks + 1});
	subtrai = () => this.setState({clicks: this.state.clicks - 1});
	zerar = () => {
		this.setState({click: this.state.clicks = 0});
		console.log("ZERANDO CONTADOR");
	};
	
	render() {
		return <div>
			<p>{this.state.clicks}</p>
			
			{/*Usando component do Material-UI*/}
			{/*
			<button className="mr-40 tamanho-mim" onClick={this.soma}>+</button>
			<button className="tamanho-mim" onClick={this.subtrai}>-</button>
			<button onClick={this.zerar}>ZERAR!</button>
			
			<Button className="mr-40" variant="contained" startIcon={<AddIcon />} color="primary" onClick={this.soma} > + </Button>
			<Button className="mr-40" variant="contained" startIcon={<RemoveIcon />} color="secondary" onClick={this.subtrai}/> - </Button>
			<Button variant="contained" endIcon={<ClearIcon />} onClick={this.zerar}>Reset</Button>
			*/}
			
			<IconButton aria-label="add"    size="medium" className="mr-40" color="primary"   onClick={this.soma}   > <AddIcon /> </IconButton> 
			<IconButton aria-label="delete" size="medium" className="mr-40" color="secondary" onClick={this.subtrai}> <RemoveIcon /> </IconButton> 
			<IconButton aria-label="clear"  size="small"  onClick={this.zerar}> <ClearIcon /> </IconButton> 
		</div>
	}
}