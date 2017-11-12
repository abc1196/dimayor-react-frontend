import React, { Component} from 'react';
import axios from 'axios';
import Route from 'react-router-dom';

class UpdateTeamPage extends Component {
	
	 constructor(props){
		super(props);
		this.state={
			idEquipo: '',
			nombre: '',
			anoFundacion: '',
			estrellas: ''
		}
		axios.get('http://localhost:8080/_ah/api/teams/v1/equipos/' + this.props.match.params.idEquipo  )
			.then(res => {
				this.setState({ idEquipo: res.data.idEquipo, 
				nombre: res.data.nombre,
				anoFundacion: res.data.anoFundacion,
				estrellas: res.data.estrellas});
			});
		this.handleChange = this.handleChange.bind(this);
		
	 }
	 
	  onSubmit = (e) => {
		e.preventDefault();
		var id=this.state.idEquipo;
		var n=this.state.nombre;
		var a=this.state.anoFundacion;
		var e=this.state.estrellas;
        axios.put('http://localhost:8080/_ah/api/teams/v1/equipo',
		{ idEquipo: id, nombre: n, anoFundacion: a, estrellas: e }).then(function(response) {
           alert('Success' );
        }).catch(function (error) {
           alert( 'Error' );
        });
      }
	  
	  
	handleChange(event) {
    
	const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
	}
	 
render() {
		
        return (
			<form onSubmit={this.onSubmit}>
			<div class="form-group">
				<label htmlFor="nombre">Name</label>
				<br/>
                <input type="text" name="nombre" value={this.state.nombre} onChange ={this.handleChange}/>
                                    
			</div>
			<div class="form-group">
				<label htmlFor="anoFundacion">Fundation Year</label>
				<br/>
                <input type="text" name="anoFundacion" value={this.state.anoFundacion}  onChange ={this.handleChange} />
                                    
			</div>
			<div class="form-group">
				 <label htmlFor="estrellas">Home Trophies</label>
				 <br/>
                 <input type="text" name="estrellas" value={this.state.estrellas}  onChange ={this.handleChange}/>
                                   
			</div>
			
             <button class="btn btn-default" type="submit" value="Submit">
			 Confirm
			 </button>
             </form>              
        );
  }
}

export default UpdateTeamPage;