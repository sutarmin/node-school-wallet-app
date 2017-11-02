import 'babel-polyfill';
import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {hydrate as reactHydrate} from 'react-dom';
import {hydrate as emotionHydrate} from 'emotion';
import {Provider} from 'react-redux';

import App from '../client/components/App';
import reducer from '../client/reducers/app';

const wrapApp = (AppComponent, reduxStore) => (
	<Provider store={reduxStore}>
		<AppComponent />
	</Provider>
);

const {ids, state} = window.__data;

const store = createStore(reducer, state, compose(applyMiddleware(thunk)));

emotionHydrate(ids);
reactHydrate(wrapApp(App, store), document.getElementById('root'));
