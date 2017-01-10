import { ADD_EMPLOYEE } from './types';

export function addNewEmployeeAction( fields ){
	return {
		type: ADD_EMPLOYEE,
		payload: {...fields, id: new Date().getTime()}
	}
}