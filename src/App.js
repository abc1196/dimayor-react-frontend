import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import TeamsListPage from './pages/teams-list-page';
import CreateTeamPage from './pages/create-team-page';
import GetTeamPage from './pages/get-team-page';
import UpdateTeamPage from './pages/update-team-page';

class App extends Component {
	
  render() {
    return (
     <Container>
         <nav class="navbar navbar-default">
		  <div class="container-fluid">
		  <div class="navbar-header">
				<a class="navbar-brand" href="/">Dimayor</a>
		 </div>
		 <ul class="nav navbar-nav">
		   <li > <NavLink  className="item" activeClassName="active" exact to="/">
		   Teams List
		     </NavLink>
			 </li>
			<li>  <NavLink className="item" activeClassName="active" exact to="/teams/new">
            Add Team
          </NavLink>
		  </li>
		  </ul>
		  </div>
		  </nav>
        <Route exact path="/" component={TeamsListPage}/>
		<Route path="/teams/new" component={CreateTeamPage}/>
		<Route path="/teams/update/:idEquipo" component={UpdateTeamPage}/>
		<Route path="/teams/:idEquipo" component={GetTeamPage}/>
      </Container>
    );
  }
}

export default App;
