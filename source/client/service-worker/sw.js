importScripts('/sw-cache-polyfill.js');

const cacheVersion = 1;
const currentCache = {
	name: `offline v${cacheVersion}`
};
// const offlineUrl = 'offline-page.html';

this.addEventListener('install', (event) => {
	// event.waitUntil(caches.open(currentCache.offline).then((cache) => {
	// 	return cache.addAll([
	// 		'./img/offline.svg',
	// 		offlineUrl
	// 	]);
	// }));
});
