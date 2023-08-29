import { Box } from '@chakra-ui/react';
import { InformacaoPessoalForm } from './InformacaoPessoalForm';
import { DetalheDeContatoForm } from './DetalheDeContatoForm';
import { DadoProfissionalForm } from './DadoProfissionalForm';
import { InformacaoDeAcessoForm } from './InformacaoDeAcessoForm';
import { PreferenciaEInteresseForm } from './PreferenciaEInteresseForm';
import { OutraInformacaoForm } from './OutraInformacaoForm';
import { TermoECondicaoForm } from './TermoECondicaoForm';

export function Usuario() {
	return (
		<Box>
			<InformacaoPessoalForm />
			<DetalheDeContatoForm />
			<DadoProfissionalForm />
			<InformacaoDeAcessoForm />
			<PreferenciaEInteresseForm />
			<OutraInformacaoForm />
			<TermoECondicaoForm />
		</Box>
	);
}
