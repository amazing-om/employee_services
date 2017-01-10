import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
//local modules
import EmployeeForm from '../components/employee-form';
import { addNewEmployeeAction } from '../actions';

let AddEmployee = ( props )=>{
	//debugger;
	return <section>
		<Link to={'/'} >Home</Link>
		<h1>Add Employee Detail</h1>
		<EmployeeForm collectFormFields={(fields)=>{ props.collectFields(fields); }} />
	</section>
};

let mapStateToProps = ( state, ownProps )=>{
	return {}
}
let mapDispatchToProps = ( dispatch, ownProps )=>{
	return {
		collectFields(fields){
			dispatch( addNewEmployeeAction(fields) );
		}
	}
}

export default connect( mapStateToProps, mapDispatchToProps )(AddEmployee);