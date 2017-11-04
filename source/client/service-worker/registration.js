export default function registerServiceWorker() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/sw.js')
			.then((registration) => {
				console.log('[Service Worker]: Registered');
			}, (reason) => {
				console.log('[Service Worker]: Registration failed', reason);
			});

		navigator.serviceWorker.ready.then((registration) => {
			console.log('Service Worker Ready');
		});
	}
}
