import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';
import { FormContainer } from '../../../components/atoms/FormContainer';

const schema = object({
	usuario: string(),
	senha: string(),
	confirmarSenha: string(),
	perguntaDeSeguranca: string(),
	respostaDaPerguntaDeSeguranca: string(),
});
type FormData = InferType<typeof schema>;

export function InformacaoDeAcessoForm() {
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
					<FormLabel>Usuário</FormLabel>
					<Input placeholder='Digite o seu usuário' />
				</FormControl>
				<FormControl>
					<FormLabel>Senha</FormLabel>
					<Input placeholder='Digite a sua senha' />
				</FormControl>
				<FormControl>
					<FormLabel>Confirmar Senha</FormLabel>
					<Input placeholder='Digite a sua senha novamente' />
				</FormControl>
				<FormControl>
					<FormLabel>Pergunta de Segurança</FormLabel>
					<Input placeholder='Digite a pergunta de segurança' />
				</FormControl>
				<FormControl>
					<FormLabel>Resposta da Pergunta de Segurança</FormLabel>
					<Input placeholder='Digite a resposta da pergunta de segurança' />
				</FormControl>
			</Stack>
		</FormContainer>
	);
}
