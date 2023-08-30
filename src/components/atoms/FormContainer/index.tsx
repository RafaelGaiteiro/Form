import { ReactNode } from 'react';
import { Edge } from './styles';

type FormContainerProps = {
	children: ReactNode;
};

export function FormContainer({ children }: FormContainerProps) {
	return (
		<Edge>
			<form>{children}</form>
		</Edge>
	);
}
