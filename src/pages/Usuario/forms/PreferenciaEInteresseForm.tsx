import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';
import { BoxEdge } from '../../../components/atoms/BoxEdge';

const schema = object({
	areasDeInteresse: string(),
	comoSoubeDeNos: string(),
});
type FormData = InferType<typeof schema>;

export function PreferenciaEInteresseForm() {
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
						<FormLabel>Áreas de Interesse</FormLabel>
						<Input placeholder='Digite as suas áreas de interesse' />
					</FormControl>
					<FormControl>
						<FormLabel>Como soube de nós?</FormLabel>
						<Input placeholder='Digite como soube de nós' />
					</FormControl>
				</Stack>
			</BoxEdge>
		</form>
	);
}
