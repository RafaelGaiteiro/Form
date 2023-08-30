import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { InferType, mixed, object, string } from 'yup';
import { FormContainer } from '../../../components/atoms/FormContainer';

const schema = object({
	fotoDePerfil: mixed(),
	descricaoOuBiografia: string(),
});
type FormData = InferType<typeof schema>;

export function OutraInformacaoForm() {
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
					<FormLabel>Foto de Perfil</FormLabel>
					<Input placeholder='Clique ou arraste para adicionar um arquivo' type='file' />
				</FormControl>
				<FormControl>
					<FormLabel>Descrição ou Biografia</FormLabel>
					<Input />
				</FormControl>
			</Stack>
		</FormContainer>
	);
}
