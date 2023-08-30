import { FooterStylized } from './styles';

export type FooterProps = {
	gridArea: string;
};

export function Footer({ gridArea }: FooterProps) {
	return <FooterStylized gridArea={gridArea}></FooterStylized>;
}
