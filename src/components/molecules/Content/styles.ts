import styled from 'styled-components';
import { ContentProps } from '.';

export const ContentStylized = styled.main<ContentProps>`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 40px;
	height: 100%;
	width: 100%;
	grid-area: ${({ gridArea }) => gridArea};
`;
