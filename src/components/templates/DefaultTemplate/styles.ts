import styled from 'styled-components';

export const DefaultTemplateStylized = styled.div`
	display: grid;
	grid-template-areas:
		'header header'
		'aside content'
		'footer footer';
	grid-template-columns: 300px auto;
	grid-template-rows: 120px auto 200px;
	min-height: 100vh;
	width: 100%;
`;

export const Background = styled.div`
	height: auto;
	background-color: ${({ theme }) => theme.colors.lightGray};
`;
