import { AsideStylized } from './styles';

export type AsideProps = {
	gridArea: string;
};

export function Aside({ gridArea }: AsideProps) {
	return <AsideStylized gridArea={gridArea}></AsideStylized>;
}
