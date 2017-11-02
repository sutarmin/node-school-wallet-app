// @flow

import styled from 'react-emotion';

const CardLayout = styled.div`
	position: relative;
	width: 260px;
	height: 164px;
	margin-bottom: 15px;
	box-sizing: border-box;
	padding: 25px 20px;
	border-radius: 4px;
	background-color: ${({backgroundColor, active}) => (active ? backgroundColor : 'rgba(255, 255, 255, 0.1)')}
`;

export default CardLayout;
