import styled from 'styled-components';
import { HeaderProps } from '.';

export const HeaderStylized = styled.header<HeaderProps>`
	background: ${({ theme }) => theme.colors.background};
	height: 120px;
	width: 100%;
	grid-area: ${({ gridArea }) => gridArea};
`;
