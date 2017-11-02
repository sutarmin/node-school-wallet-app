import React from 'react';
import styled from 'react-emotion';
import {injectGlobal} from 'emotion';

import CardsBar from '../containers/CardsBar';
import Header from '../containers/Header';
import History from '../containers/History';

import '../css/fonts.css';

injectGlobal([`
	html,
	body {
		margin: 0
		height: 100%
	}

	#root {
		height: 100%
		font-family: 'Open Sans'
		color: #000
	}
`]);

const Wallet = styled.div`
	display: flex;
	min-height: 100%;
	background-color: #fcfcfc;
`;

const CardPanel = styled.div`
	flex-grow: 1;
`;

const Workspace = styled.div`
	display: felx;
	flex-wrap: wrap;
	max-width: 970px;
	padding: 15px;
`;

const App = () => (
	<Wallet>
		<CardsBar />
		<CardPanel>
			<Header />
			<Workspace>
				<History />
			</Workspace>
		</CardPanel>
	</Wallet>
);

export default App;
