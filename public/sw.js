self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('install', () => {
  console.log('LifeAI service worker installed');
});

self.addEventListener('activate', () => {
  console.log('LifeAI service worker activated');
});
