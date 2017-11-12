import React, { Component} from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import {compile} from 'path-to-regexp';
import GetTeamPage from './get-team-page';


class TeamsListPage extends Component {
  

	constructor(props){
		super(props);
		this.state={
			teams: []
		}
	}
	
	componentDidMount(){
		
		axios.get('http://localhost:8080/_ah/api/teams/v1/equipos')
			.then(res => {
				console.log(res.data.items);
				const teams= res.data.items.map(obj => obj);
				this.setState({ teams });
			});
	}
	
	refreshPage(){ 
		window.location.reload(); 
	}
	
	deleteTeam(idEquipo){
		
		axios.post('http://localhost:8080/_ah/api/teams/v1/equipo/remove/'+idEquipo)
			.then(function(response) {
           alert('Success' );
		   this.refreshPage();
        }).catch(function (error) {
           alert( error );
		   this.refreshPage();
        });
		
		
	}

  render() {
	  return (
         <Router>
		<div class="container">
			<ul class="list-group">
			{this.state.teams.map(team => 
			 <li class="list-group-item" key={team.idEquipo}><Link to={'/teams/'+team.idEquipo} onClick={this.refreshPage}>{team.nombre}</Link> <br/> <button class="btn btn-default" type="button" onClick={ event =>  this.deleteTeam(team.idEquipo) }>Eliminar </button> <Link to={'/teams/update/'+team.idEquipo} onClick={this.refreshPage}><button class="btn btn-default"  type="button">
         Editar
     </button></Link>  </li>
			)}
			</ul>
	
	</div>
	 </Router>
    )
  }
}

export default TeamsListPage;