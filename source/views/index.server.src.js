import 'babel-polyfill';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {extractCritical} from 'emotion-server';
import serialize from 'serialize-javascript';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';

import reducer from '../client/reducers/app';
import App from '../client/components/App';

module.exports = (preloadedState) => {
	const store = createStore(
		reducer,
		preloadedState,
		compose(applyMiddleware(thunk))
	);
	const app = renderToString(
		<Provider store={store}>
			<App />
		</Provider>
	);
	const {html, ids, css} = extractCritical(app);
	const state = store.getState();
	const viewData = `window.__data=${serialize({ids, state})};`;

	return (
		<html>
			<head>
				<meta charSet='utf-8' />
				<title>Node School App</title>
				<link rel='shortcut icon' href='/public/favicon.ico' />
				<link rel='stylesheet' href='index.css' />
				<style
					type='text/css'
					dangerouslySetInnerHTML={{__html: css}}>
				</style>
			</head>
			<body>
				<div
					id='root'
					dangerouslySetInnerHTML={{__html: html}}>
				</div>
				<script dangerouslySetInnerHTML={{__html: viewData}}></script>
				<script src='index.js'></script>
			</body>
		</html>
	);
};
