type UsuarioTabsProps = {
	form: string;
	tabs: { label: string; value: string }[];
};

export const usuarioTabs: UsuarioTabsProps = {
	form: 'usuario',
	tabs: [
		{ label: 'Informações Pessoais', value: 'informacaoPessoal' },
		{ label: 'Detalhes de Contato', value: 'detalheDeContato' },
		{ label: 'Dados Profissionais', value: 'dadoProfissional' },
		{ label: 'Informações de Acesso', value: 'informacaoDeAcesso' },
		{ label: 'Preferências e Interesses', value: 'preferenciaEInteresse' },
		{ label: 'Outras Informações', value: 'outraInformacao' },
		{ label: 'Termos e Condições', value: 'termoECondicao' },
	],
};
