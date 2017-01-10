import { ADD_EMPLOYEE } from '../actions/types';

export default ( state={employees:{}, employeeIds: []}, action )=>{
	switch(action.type){
		case ADD_EMPLOYEE:
			return { employees: {...state.employees, [action.payload.id]: action.payload }, employeeIds: [...state.employeeIds, action.payload.id] };
		default:
			return state;
	}
}