import { Box } from '@chakra-ui/react';
import { useTheme } from 'styled-components';
import { Tabs } from '../../atoms/Tabs';
import { AsideStylized } from './styles';

export type AsideProps = {
	gridArea: string;
};

export function Aside({ gridArea }: AsideProps) {
	const { colors } = useTheme();

	return (
		<AsideStylized gridArea={gridArea}>
			<Box
				display='flex'
				flexDirection='column'
				alignItems='flex-start'
				p='24px'
				m='0 16px'
				rowGap='8px'
				backgroundColor={colors.background}
				rounded='8px'
			>
				<Tabs />
			</Box>
		</AsideStylized>
	);
}
