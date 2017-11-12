import React, { Component} from 'react';
import axios from 'axios';
import GetTeamPage from './get-team-page';

class CreateTeamPage extends Component {
  
  constructor(props){
		super(props);
		this.state={
			 nombre: '',
             anoFundacion: '',
             estrellas: ''
		}
		
	}
	 onSubmit = (e) => {
		e.preventDefault();
		var n=this.nombre.value;
		var a=this.anoFundacion.value;
		var e=this.estrellas.value;
        axios.post('http://localhost:8080/_ah/api/teams/v1/equipo',
		{nombre: n, anoFundacion: a, estrellas: e }).then(function(response) {
           alert('Success' );
        }).catch(function (error) {
           alert( 'Error' );
        });
		this.setState({nombre: '',
             anoFundacion: '',
             estrellas: ''});
		
      }

  render() {
    
        return (
         <form onSubmit={this.onSubmit}>
			<div class="form-group">
				<label htmlFor="nombre">Name</label>
				<br/>
                <input type="text" name="nombre" placeholder="Name" ref={(input) => { this.nombre = input; }}/>
                                    
			</div>
			<div class="form-group">
				<label htmlFor="anoFundacion">Fundation Year</label>
				<br/>
                <input type="text" name="anoFundacion" placeholder="Fundation Year" ref={(input) => { this.anoFundacion = input; }}/>
                                    
			</div>
			<div class="form-group">
				 <label htmlFor="estrellas">Home Trophies</label>
				 <br/>
                 <input type="text" name="estrellas" placeholder="Home Trophies" ref={(input) => { this.estrellas = input; }}/>
                                   
			</div>
			
             <button class="btn btn-default" type="submit" value="Submit">
			 Submit
			 </button>
            </form>
        );
  }
}

export default CreateTeamPage;