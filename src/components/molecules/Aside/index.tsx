import { Button } from '@chakra-ui/react';
import { AsideStylized } from './styles';

export type AsideProps = {
	gridArea: string;
};

export function Aside({ gridArea }: AsideProps) {
	return (
		<AsideStylized gridArea={gridArea}>
			<Button>Informações Pessoais</Button>
			<Button>Detalhes de Contato</Button>
			<Button>Dados Profissionais</Button>
			<Button>Informações de Acesso</Button>
			<Button>Preferências e Interesses</Button>
			<Button>Outras Informações</Button>
		</AsideStylized>
	);
}
