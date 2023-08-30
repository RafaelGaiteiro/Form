import { Checkbox, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { InferType, boolean, object } from 'yup';

const schema = object({
	termosECondicoes: boolean(),
});
type FormData = InferType<typeof schema>;

export function TermoECondicaoForm() {
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
			<Stack>
				<Checkbox>Aceito os Termos e Condições</Checkbox>
			</Stack>
		</form>
	);
}
