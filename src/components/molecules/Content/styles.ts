import styled from 'styled-components';
import { ContentProps } from '.';

export const ContentStylized = styled.main<ContentProps>`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 24px;
	min-height: 100%;
	width: 100%;
	grid-area: ${({ gridArea }) => gridArea};
	background: ${({ theme }) => theme.colors.background};
	border-radius: 8px 0 0 8px;
`;
