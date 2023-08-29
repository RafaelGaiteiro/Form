import styled from 'styled-components';

export const DefaultTemplateStylized = styled.div`
	display: grid;
	grid-template-areas:
		'header header'
		'aside content'
		'footer footer';
	grid-template-columns: 300px auto;
	grid-template-rows: 120px auto 200px;
	height: 100%;
	width: 100%;
`;

export const Background = styled.div`
	background-color: ${({ theme }) => theme.colors.darkNavyBlue};
`;
