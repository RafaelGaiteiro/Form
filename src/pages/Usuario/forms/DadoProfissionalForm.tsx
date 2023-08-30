import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';
import { FormContainer } from '../../../components/atoms/FormContainer';

const schema = object({
	profissao: string(),
	empresa: string(),
	cargo: string(),
	areaDeAtuacao: string(),
});
type FormData = InferType<typeof schema>;

export function DadoProfissionalForm() {
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
					<FormLabel>Profissão</FormLabel>
					<Input placeholder='Digite a sua profissão' />
				</FormControl>
				<FormControl>
					<FormLabel>Empresa</FormLabel>
					<Input placeholder='Digite a sua empresa' />
				</FormControl>
				<FormControl>
					<FormLabel>Cargo</FormLabel>
					<Input placeholder='Digite o seu cargo' />
				</FormControl>
				<FormControl>
					<FormLabel>Àrea de Atuação</FormLabel>
					<Input placeholder='Digite a sua área de atuação' />
				</FormControl>
			</Stack>
		</FormContainer>
	);
}
