export default function registerServiceWorker() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/service-worker.js')
			.then((registration) => {
				console.log('[Service Worker]: Registered');
			}, (reason) => {
				console.log('[Service Worker]:', reason);
			});

		navigator.serviceWorker.ready.then((registration) => {
			console.log('Service Worker Ready');
		});
	}
}
