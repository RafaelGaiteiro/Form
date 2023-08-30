import { Button, Divider } from '@chakra-ui/react';
import { Fragment } from 'react';
import { usuarioTabs } from '../../../pages/Usuario/usuarioTabs';
import { useTabs } from '../../../contexts/TabsContext';

export function Tabs() {
	const { setSelectedTab } = useTabs();

	return (
		<Fragment>
			<Divider />
			{usuarioTabs.tabs.map((tab) => (
				<Fragment key={tab.value}>
					<Button variant='link' onClick={() => setSelectedTab(tab.value)}>
						{tab.label}
					</Button>
					<Divider />
				</Fragment>
			))}
		</Fragment>
	);
}
