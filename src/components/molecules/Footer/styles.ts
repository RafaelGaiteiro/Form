import styled from 'styled-components';
import { FooterProps } from '.';

export const FooterStylized = styled.footer<FooterProps>`
	background: ${({ theme }) => theme.colors.darkNavyBlue};
	height: 200px;
	width: 100%;
	grid-area: ${({ gridArea }) => gridArea};
`;
