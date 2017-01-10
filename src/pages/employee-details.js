import React from 'react';
import { connect } from 'react-redux';
//local modules
import EmployeeTable from '../components/employee-table';

let mapStateToProps = ( state, ownProps )=>{
	return {
		rows: state.employeeRecords.employeeIds.map(( id )=>{
			
			return state.employeeRecords.employees[id];
		})
	}
}

export default connect( mapStateToProps )( EmployeeTable );