import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';
import { FormContainer } from '../../../components/atoms/FormContainer';
import { fetchEndereco } from '../../../services/fetchEndereco';

const schema = object({
	logradouro: string(),
	numero: string(),
	complemento: string(),
	bairro: string(),
	cidade: string(),
	estado: string(),
	cep: string(),
	telefone: string(),
	email: string(),
});
type FormData = InferType<typeof schema>;

export function DetalheDeContatoForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setValue,
	} = useForm({
		resolver: yupResolver(schema),
	});

	function onSubmit(data: FormData) {}

	const cep = watch('cep');

	useEffect(() => {
		if (cep?.length === 8) {
			fetchEndereco(cep).then((endereco) => {
				setValue('logradouro', endereco.logradouro);
				setValue('complemento', endereco.complemento);
				setValue('bairro', endereco.bairro);
				setValue('cidade', endereco.localidade);
				setValue('estado', endereco.uf);
				setValue('telefone', endereco.ddd);
			});
		}
	}, [cep]);

	return (
		<FormContainer onSubmit={handleSubmit(onSubmit)}>
			<Stack>
				<FormControl>
					<FormLabel>CEP</FormLabel>
					<Input placeholder='Digite o seu CEP' {...register('cep')} />
				</FormControl>
				<FormControl>
					<FormLabel>Logradouro</FormLabel>
					<Input placeholder='Digite o seu logradouro' {...register('logradouro')} />
				</FormControl>
				<FormControl>
					<FormLabel>Número</FormLabel>
					<Input placeholder='Digite o seu número' {...register('numero')} />
				</FormControl>
				<FormControl>
					<FormLabel>Complemento</FormLabel>
					<Input placeholder='Digite o seu complemento' {...register('complemento')} />
				</FormControl>
				<FormControl>
					<FormLabel>Bairro</FormLabel>
					<Input placeholder='Digite o seu bairro' {...register('bairro')} />
				</FormControl>
				<FormControl>
					<FormLabel>Cidade</FormLabel>
					<Input placeholder='Digite a sua cidade' {...register('cidade')} />
				</FormControl>
				<FormControl>
					<FormLabel>Estado</FormLabel>
					<Input placeholder='Digite o seu estado' {...register('estado')} />
				</FormControl>
				<FormControl>
					<FormLabel>Telefone</FormLabel>
					<Input placeholder='Digite o seu telefone' {...register('telefone')} />
				</FormControl>
				<FormControl>
					<FormLabel>Email</FormLabel>
					<Input placeholder='Digite o seu email' {...register('email')} />
				</FormControl>
			</Stack>
		</FormContainer>
	);
}
