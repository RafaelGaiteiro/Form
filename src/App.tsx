import { Center, ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './common/styles/GlobalStyle';
import { theme } from './common/styles/themes/theme';
import { TabsProvider } from './contexts/TabsContext';
import { router } from './routes/router';

function App() {
	return (
		<TabsProvider>
			<ChakraProvider>
				<ThemeProvider theme={theme}>
					<Center>
						<RouterProvider router={router} />
					</Center>
				</ThemeProvider>
			</ChakraProvider>
			<GlobalStyle />
		</TabsProvider>
	);
}

export default App;
