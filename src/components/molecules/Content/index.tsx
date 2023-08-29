import { ReactNode } from 'react';
import { ContentStylized } from './styles';

export type ContentProps = {
	children: ReactNode;
	gridArea: string;
};

export function Content({ children, gridArea }: ContentProps) {
	return <ContentStylized gridArea={gridArea}>{children}</ContentStylized>;
}
