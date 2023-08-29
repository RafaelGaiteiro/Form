import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';
import { BoxEdge } from '../../components/atoms/BoxEdge';

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
	} = useForm({
		resolver: yupResolver(schema),
	});

	function osSubmit(data: FormData) {}

	return (
		<form>
			<BoxEdge>
				<Stack>
					<FormControl>
						<FormLabel>Logradouro</FormLabel>
						<Input placeholder='Digite o seu logradouro' />
					</FormControl>
					<FormControl>
						<FormLabel>Número</FormLabel>
						<Input placeholder='Digite o seu número' />
					</FormControl>
					<FormControl>
						<FormLabel>Complemento</FormLabel>
						<Input placeholder='Digite o seu complemento' />
					</FormControl>
					<FormControl>
						<FormLabel>Bairro</FormLabel>
						<Input placeholder='Digite o seu bairro' />
					</FormControl>
					<FormControl>
						<FormLabel>Cidade</FormLabel>
						<Input placeholder='Digite a sua cidade' />
					</FormControl>
					<FormControl>
						<FormLabel>Estado</FormLabel>
						<Input placeholder='Digite o seu estado' />
					</FormControl>
					<FormControl>
						<FormLabel>CEP</FormLabel>
						<Input placeholder='Digite o seu CEP' />
					</FormControl>
					<FormControl>
						<FormLabel>Telefone</FormLabel>
						<Input placeholder='Digite o seu telefone' />
					</FormControl>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input placeholder='Digite o seu email' />
					</FormControl>
				</Stack>
			</BoxEdge>
		</form>
	);
}
