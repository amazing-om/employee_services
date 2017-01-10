import React, { Component } from 'react';
import SmartTable from 'unity-components/react/components/SmartTable/SmartTable.jsx';

let tableConfig = {
	config: {
		externalResultsPerPage: 10
	},
	columnMetadata:[ 
				{"columnName": "name",      "displayName": "Name"},
				{"columnName": "designation",   "displayName": "Designation"},
				{"columnName": "company",    "displayName": "Company"},
				{"columnName": "state", "displayName":"State"},
				{"columnName": "city", "displayName":"City"},
				{"columnName":"dob", "displayName":"DOB"}
		]
}


class EmployeeTable extends React.Component{

	constructor(props) {
		super(props);
	}

	render(){
		let empObj = {...tableConfig};
		empObj.dataList = this.props.rows;
		return(
			<SmartTable title="Employee Details" {...empObj}/>
		)
	}

}

export default EmployeeTable;
