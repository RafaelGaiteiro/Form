import { Center, ChakraProvider } from '@chakra-ui/react';
import { Fragment } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './common/styles/GlobalStyle';
import { theme } from './common/styles/themes/theme';
import { router } from './routes/router';

function App() {
	return (
		<Fragment>
			<ChakraProvider>
				<ThemeProvider theme={theme}>
					<Center>
						<RouterProvider router={router} />
					</Center>
				</ThemeProvider>
			</ChakraProvider>
			<GlobalStyle />
		</Fragment>
	);
}

export default App;
