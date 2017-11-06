/* eslint-disable */
importScripts('/sw-cache-polyfill.js');
importScripts('/AssetsManager.js');

const assetsManager = new AssetsManager();

self.addEventListener('install', event => {
	event.waitUntil(
		assetsManager.addAllToCache()
	);
});

self.addEventListener('activate', event => {
	event.waitUntil(
		assetsManager.removeNotInAssets()
	);
});

self.addEventListener('fetch', event => {
	console.log(event.request.url);
	event.respondWith(
		tryFetch(event.request)
	);
});

self.addEventListener('message', event => {
	console.log('SW says:', event.data);
});

function tryFetch(request) {
	return fetch(request)
		.catch(error => {
			//are we offline? 
			//	console.log('[SW fetch error] ', error);
			return caches.match(request);
		});
}
