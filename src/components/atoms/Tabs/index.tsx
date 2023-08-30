import { Box, Button, Divider } from '@chakra-ui/react';
import { Fragment } from 'react';
import { usuarioTabs } from '../../../pages/Usuario/usuarioTabs';
import { useTabs } from '../../../contexts/TabsContext';
import { useTheme } from 'styled-components';

export function Tabs() {
	const { setSelectedTab } = useTabs();
	const { colors } = useTheme();

	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='flex-start'
			p='24px'
			m='0 16px'
			rowGap='8px'
			backgroundColor={colors.backgroundContent}
			rounded='8px'
		>
			<Divider />
			{usuarioTabs.tabs.map((tab) => (
				<Fragment key={tab.value}>
					<Button variant='link' onClick={() => setSelectedTab(tab.value)}>
						{tab.label}
					</Button>
					<Divider />
				</Fragment>
			))}
		</Box>
	);
}
