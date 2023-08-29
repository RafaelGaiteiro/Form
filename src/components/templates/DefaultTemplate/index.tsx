import { ReactNode } from 'react';
import { Aside } from '../../molecules/Aside';
import { Content } from '../../molecules/Content';
import { Header } from '../../molecules/Header';
import { Background, DefaultTemplateStylized } from './styles';
import { Footer } from '../../molecules/Footer';

type DefaultTemplateProps = {
	children: ReactNode;
};

export function DefaultTemplate({ children }: DefaultTemplateProps) {
	return (
		<DefaultTemplateStylized>
			<Header gridArea='header' />
			<Aside gridArea='aside' />
			<Background>
				<Content gridArea='content'>{children}</Content>
			</Background>
			<Footer gridArea='footer' />
		</DefaultTemplateStylized>
	);
}
