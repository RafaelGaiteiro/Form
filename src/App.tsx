import { Center, ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

function App() {
	return (
		<ChakraProvider>
			<Center>
				<RouterProvider router={router} />
			</Center>
		</ChakraProvider>
	);
}

export default App;
