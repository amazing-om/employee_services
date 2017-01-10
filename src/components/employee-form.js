import React, { Component } from 'react';
import SmartInput from 'unity-components/react/components/SmartFormV2/SmartInput.jsx';
import SmartDropDownSelect from 'unity-components/react/components/SmartForm/SmartDropDownSelect.jsx';
import SmartButton from 'unity-components/react/components/SmartFormv2/SmartButton.jsx';

//Local
import { FormConfig, stateVal, cityVal } from '../config/app-config.jsx';




class EmployeeForm extends Component{

	constructor( props ){
		super( props );
		this.state={
			slectStates:stateVal,
			cities:[]
		}

		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.stateToCity = this.stateToCity.bind(this);
	}

	onFormSubmit(event){
		//console.log(res,evt)
		event.preventDefault();
		this.props.collectFormFields({
			"name": this.refs.employeeNameInp.value,
			"designation": this.refs.employeeDesignationInp.value,
			"company": this.refs.employeeCompanyInp.value,
			"state":this.refs.stateName.value,
			"city":this.refs.cityName.value,
			"dob":this.refs.employeeDobInp.value


		});
		//debugger;
		this.refs.employeeNameInp.value = '';
		this.refs.employeeDesignationInp.value = '';
		this.refs.employeeCompanyInp.value = '';
		this.refs.stateName.value = '';
		this.refs.cityName.value = '';
		this.refs.employeeDobInp.value = '';
	}
	
	stateToCity(event){
		let selectedState = event.target.value;

		cityVal.map((states) =>{
			let cities = [];
			if(selectedState == states.stateName){
				cities = states.cities;
				console.log(cities)
				this.setState({"cities": cities})
			}
		})
		

	}

	render(){ 
		let stateNames = this.state.slectStates
		return (
			<div>
				<label htmlFor="employeeName">
					Name: 
					<input id="employeeName" type="text" ref="employeeNameInp" />
				</label>
				<label htmlFor="employeeDesignation">
					Designation: 
					<input id="employeeDesignation" type="text" ref="employeeDesignationInp" />
				</label>
				<label htmlFor="employeeCompany">
					Company: 
					<input id="employeeCompany" type="text" ref="employeeCompanyInp" />
				</label>
       			<label>
       				Select State:
       				<select ref="stateName" onChange={this.stateToCity}>
       					{
       						stateNames.map((states) => {
       							return<option value={states.value}>{states.value}</option>
       					})
       				}
       				</select>

       			</label>
       			{ this.state.cities.length > 0 ? <label>
	       				Select city:
	       				<select ref="cityName" onChange={this.stateToCity}>
	       					{
	       						this.state.cities.map((city) => {
	       							return<option value={city}>{city}</option>
	       					})
	       				}
	       				</select>

	       			</label> : <label> 
	       				Select city:
	       				<select ref="cityName" > 
	       					<option value="SelectAcity">Select A City</option>
	       				</select>
	       				</label>
       			}
       			<label htmlFor="employeeDob">
					DOB: 
					<input id="employeedob" type="date" ref="employeeDobInp" />
				</label>

       			<button onClick={this.onFormSubmit} >Submit</button>
			</div>
		)
	}
}
export default EmployeeForm;
