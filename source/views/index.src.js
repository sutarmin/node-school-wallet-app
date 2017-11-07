import React from 'react';
import {hydrate as reactHydrate} from 'react-dom';
import {hydrate as emotionHydrate} from 'emotion';
import {App} from '../client/components';
import {sendGetStatusCommand} from '../client/service-worker/client-utils';

const {ids, appData} = window.__data;

emotionHydrate(ids);
reactHydrate(<App data={appData} />, document.getElementById('root'));

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js')
		.then((registration) => console.log('[Service Worker]: Registered', registration))
		.then(() => navigator.serviceWorker.ready)
		.then(() => sendGetStatusCommand().catch(console.log))
		.then((statusInfo) => console.log('client got statusInfo responce!', statusInfo));

	navigator.serviceWorker.addEventListener('message', (event) => {
		const statusInfo = event.data;
		console.log('client got event!', statusInfo, event);
	});
}
