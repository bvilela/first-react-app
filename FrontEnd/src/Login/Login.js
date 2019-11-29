import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './Login.scss'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

export default class Login extends Component {
	render() {
		return (
			<Card className="centralizar">
				<CardContent>
					Bem vindo
					<div id="usuario">
						<Grid container spacing={1} alignItems="flex-end">
							<Grid item><AccountCircle /></Grid>
							<Grid item>
								<TextField id="input-with-icon-grid" label="Digite seu usuário" />
							</Grid>
						</Grid>
					</div>
					<div id="senha">
						<Grid container spacing={1} alignItems="flex-end">
							<Grid item><VpnKeyIcon /></Grid>
							<Grid item>
								<TextField id="input-with-icon-grid" label="Digite sua senha" type="password" autoComplete="no" />
							</Grid>
						</Grid>
					</div>					
				</CardContent>
				<CardActions>
					<Button size="medium" variant="contained" color="primary" >Login</Button>
				</CardActions>
			</Card>
		);
	}
}