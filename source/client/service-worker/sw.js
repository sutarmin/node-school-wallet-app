/* eslint-disable */
importScripts('/sw-cache-polyfill.js');
//importScripts('/AssetsManager.js');

//const assetsManager = new AssetsManager();
const cacheName = 'offline v1.0';
//const cacheEntries = [];

self.addEventListener('install', event => {
	// event.waitUntil(
	// 	cacheAll()
	// );
});

self.addEventListener('activate', event => {
	event.waitUntil(
		removeObsoleteCache()
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		fetchOrGetFromCache(event.request)
	);
});

self.addEventListener('message', event => {
	console.log('SW says:', event.data);
});

function fetchOrGetFromCache(request) {
	return fetch(request)
		.then(response => {
			return caches.open(cacheName)
				.then(cache => {
					cache.put(request, response.clone())
					return response;
				});
		})
		.catch(error => {
			//are we offline now? 
			return getFromCache(request);
		});
}


function getFromCache(request) {
	return caches.open(cacheName)
		.then(cache => cache.match(request));
}

function removeObsoleteCache() {
	return caches.keys()
		.then(keys => {
			const keysToDelete = keys.filter(key => key !== cacheName);
			const promistes = keysToDelete.map(key => caches.delete(key));
			return Promise.all(promistes);
		});
};

// function cacheAll() {
// 	return caches.open(cacheName)
// 		.then(cache => {
// 			return cache.addAll(cacheEntries);
// 		});
// };
