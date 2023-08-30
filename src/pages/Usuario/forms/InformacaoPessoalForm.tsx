import { FormControl, FormLabel, Input, Select, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { InferType, date, object, string } from 'yup';
import { FormContainer } from '../../../components/atoms/FormContainer';

const schema = object({
	nome: string(),
	sobrenome: string(),
	dataDeNascimento: date(),
	genero: string(),
	contato: string(),
});
type FormData = InferType<typeof schema>;

export function InformacaoPessoalForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	function osSubmit(data: FormData) {}

	return (
		<FormContainer>
			<Stack>
				<FormControl>
					<FormLabel>Nome</FormLabel>
					<Input placeholder='Digite o seu nome' />
				</FormControl>
				<FormControl>
					<FormLabel>Sobrenome</FormLabel>
					<Input placeholder='Digite o seu sobrenome' />
				</FormControl>
				<FormControl>
					<FormLabel>Data de Nascimento</FormLabel>
					<Input type='date' />
				</FormControl>
				<FormControl>
					<FormLabel>Gênero</FormLabel>
					<Select placeholder='Gênero'>
						<option value='option1'>Option 1</option>
						<option value='option2'>Option 2</option>
						<option value='option3'>Option 3</option>
					</Select>
				</FormControl>
				<FormControl>
					<FormLabel>Contato</FormLabel>
					<Input placeholder='Digite o seu contato' />
				</FormControl>
			</Stack>
		</FormContainer>
	);
}
