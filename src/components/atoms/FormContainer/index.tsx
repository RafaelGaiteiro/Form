import { ReactNode, FormEventHandler } from 'react';
import { Edge } from './styles';
import { Box } from '@chakra-ui/react';

type FormContainerProps = {
	children: ReactNode;
	onSubmit: FormEventHandler<HTMLFormElement> | undefined;
};

export function FormContainer({ children, onSubmit }: FormContainerProps) {
	return (
		<Box w='600px'>
			<Edge>
				<form onSubmit={onSubmit}>{children}</form>
			</Edge>
		</Box>
	);
}
