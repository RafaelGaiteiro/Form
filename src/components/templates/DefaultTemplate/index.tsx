import { ReactNode } from 'react';
import { Aside } from '../../molecules/Aside';
import { Content } from '../../molecules/Content';
import { Footer } from '../../molecules/Footer';
import { Header } from '../../molecules/Header';
import { Background, DefaultTemplateStylized } from './styles';

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
