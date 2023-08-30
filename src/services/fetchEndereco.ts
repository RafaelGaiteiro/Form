import axios, { AxiosResponse } from 'axios';

type Endereco = {
	cep: string;
	logradouro: string;
	complemento: string;
	bairro: string;
	localidade: string;
	uf: string;
	ibge: string;
	gia: string;
	ddd: string;
	siafi: string;
};

export async function fetchEndereco(cep: string): Promise<Endereco> {
	try {
		const response = await axios.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
		return response.data;
	} catch (err) {
		console.error(err);
		throw new Error('Erro ao buscar endereço.');
	}
}
