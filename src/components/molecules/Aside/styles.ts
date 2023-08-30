import styled from 'styled-components';
import { AsideProps } from '.';

export const AsideStylized = styled.div<AsideProps>`
	background: ${({ theme }) => theme.colors.lightGray};
	height: 100%;
	width: 300px;
	grid-area: ${({ gridArea }) => gridArea};
`;
