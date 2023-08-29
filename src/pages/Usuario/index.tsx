import { DefaultTemplate } from '../../components/templates/DefaultTemplate';
import { DadoProfissionalForm } from './DadoProfissionalForm';
import { DetalheDeContatoForm } from './DetalheDeContatoForm';
import { InformacaoDeAcessoForm } from './InformacaoDeAcessoForm';
import { InformacaoPessoalForm } from './InformacaoPessoalForm';
import { OutraInformacaoForm } from './OutraInformacaoForm';
import { PreferenciaEInteresseForm } from './PreferenciaEInteresseForm';
import { TermoECondicaoForm } from './TermoECondicaoForm';

export function Usuario() {
	return (
		<DefaultTemplate>
			<InformacaoPessoalForm />
			<DetalheDeContatoForm />
			<DadoProfissionalForm />
			<InformacaoDeAcessoForm />
			<PreferenciaEInteresseForm />
			<OutraInformacaoForm />
			<TermoECondicaoForm />
		</DefaultTemplate>
	);
}
