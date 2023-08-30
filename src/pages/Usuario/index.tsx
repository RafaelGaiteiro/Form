import { DefaultTemplate } from '../../components/templates/DefaultTemplate';
import { useTabs } from '../../contexts/TabsContext';
import { DadoProfissionalForm } from './forms/DadoProfissionalForm';
import { DetalheDeContatoForm } from './forms/DetalheDeContatoForm';
import { InformacaoDeAcessoForm } from './forms/InformacaoDeAcessoForm';
import { InformacaoPessoalForm } from './forms/InformacaoPessoalForm';
import { OutraInformacaoForm } from './forms/OutraInformacaoForm';
import { PreferenciaEInteresseForm } from './forms/PreferenciaEInteresseForm';
import { TermoECondicaoForm } from './forms/TermoECondicaoForm';

export function Usuario() {
	const { selectedTab } = useTabs();

	return (
		<DefaultTemplate>
			{selectedTab === 'informacaoPessoal' && <InformacaoPessoalForm />}
			{selectedTab === 'detalheDeContato' && <DetalheDeContatoForm />}
			{selectedTab === 'dadoProfissional' && <DadoProfissionalForm />}
			{selectedTab === 'informacaoDeAcesso' && <InformacaoDeAcessoForm />}
			{selectedTab === 'preferenciaEInteresse' && <PreferenciaEInteresseForm />}
			{selectedTab === 'outraInformacao' && <OutraInformacaoForm />}
			{selectedTab === 'termoECondicao' && <TermoECondicaoForm />}
		</DefaultTemplate>
	);
}
