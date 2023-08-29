import styled from 'styled-components';
import { AsideProps } from '.';

export const AsideStylized = styled.div<AsideProps>`
	background: #5b9a8b;
	height: 100%;
	width: 300px;
	grid-area: ${({ gridArea }) => gridArea};
`;
