import React, { Component} from 'react';
import axios from 'axios';
import Route from 'react-router-dom';

class GetTeamPage extends Component {
	
	 constructor(props){
		super(props);
		this.state={
			team: [], 
			disabled: true
		}
		axios.get('http://localhost:8080/_ah/api/teams/v1/equipos/' + this.props.match.params.idEquipo  )
			.then(res => {
				const team= res.data;
				this.setState({ team });
			});
		
	 }
render() {
    
        return (
		<div>
			<div class="form-group">
				<label htmlFor="nombre">Name</label>
				<br/>
                <input type="text" name="nombre" value={this.state.team.nombre} disabled = {(this.state.disabled)? "disabled" : ""}/>
                                    
                                    
			</div>
			<div class="form-group">
				<label htmlFor="anoFundacion">Fundation Year</label>
				<br/>
                <input type="text" name="anoFundacion" value={this.state.team.anoFundacion} disabled = {(this.state.disabled)? "disabled" : ""}/>
									                 
			</div>
			<div class="form-group">
				<label htmlFor="estrellas">Home Trophies</label>
				<br/>
                <input type="text" name="estrellas" value={this.state.team.estrellas} disabled = {(this.state.disabled)? "disabled" : ""}/>
                                 
			</div>
		</div>                     
        );
  }
}

export default GetTeamPage;

