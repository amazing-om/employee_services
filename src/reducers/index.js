import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import employeeFields from './employee-fields';
import employeeRecords from './employee-records';

export default combineReducers({
	employeeFields,
	employeeRecords,
	routing
});