import App from '../pages/App';
import AddEmployee from '../pages/add-employee';

let AppRoutes = {
	path: '/',
	component: App,
	childRoutes: [
		{
			path: '/add',
			component: AddEmployee
		}
	]
};

export default AppRoutes;