/* eslint-disable no-undef,no-console,import/prefer-default-export */

export function registerServiceWorker() {
	return new Promise((resolve, reject) => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/sw.js')
				.then((registration) => {
					console.log('[Service Worker]: Registered');
					resolve();
				}, (reason) => {
					console.log('[Service Worker]: Registration failed', reason);
					reject(reason);
				});
		} else {
			reject(new Error('NOT SUPPORTED!'));
		}
	});
}

// export function sendCacheAllCommand() {
// 	if ('serviceWorker' in navigator) {
// 		navigator.serviceWorker.controller.postMessage({
// 			type: 'cacheAll'
// 		});
// 	}
// }
