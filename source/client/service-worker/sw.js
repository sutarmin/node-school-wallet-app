/* eslint-disable */
importScripts('/sw-cache-polyfill.js');

const cacheVersion = 1;
const currentCache = {
	versionWhitelist: [],
	name: `offline v${cacheVersion}`
};
// const offlineUrl = 'offline-page.html';

self.addEventListener('install', event => {
	// event.waitUntil(caches.open(currentCache.offline).then((cache) => {
	// 	return cache.addAll([
	// 		'./img/offline.svg',
	// 		offlineUrl
	// 	]);
	// }));
});

self.addEventListener('activate', event => {
	event.waitUntil(
		deleteObsoleteCache()
	);
});

self.addEventListener('fetch', event => {
	console.log(event.request.url);
});

function deleteObsoleteCache() {
	return caches.keys().then(keys => {
		const keysToDelete = keys.filter(key => {
			if (key === currentCache.name) {
				return false;
			}

			if (currentCache.versionWhitelist.indexOf(key) !== -1) {
				return false;
			}

			return true;
		})

		const deletePromises = keysToDelete.map(key => caches.delete(key));
		return Promise.all(deletePromises);
	});
}
