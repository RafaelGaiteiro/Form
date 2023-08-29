import { createBrowserRouter } from 'react-router-dom';
import { Usuario } from '../pages/Usuario';

export const router = createBrowserRouter([
	{
		path: 'usuario',
		element: <Usuario />,
	},
]);
