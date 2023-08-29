import { HeaderStylized } from './styles';

export type HeaderProps = {
	gridArea: string;
};

export function Header({ gridArea }: HeaderProps) {
	return <HeaderStylized gridArea={gridArea}></HeaderStylized>;
}
