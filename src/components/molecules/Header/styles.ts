import styled from 'styled-components';
import { HeaderProps } from '.';

export const HeaderStylized = styled.header<HeaderProps>`
	background: #5b9a8b;
	height: 120px;
	width: 100%;
	grid-area: ${({ gridArea }) => gridArea};
`;
