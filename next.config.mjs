import withPWA from 'next-pwa';

const isDev = process.env.NODE_ENV === 'development';

const runtimeCaching = [
  {
    urlPattern: /^https:\/\/firestore\.googleapis\.com\/.*/i,
    handler: 'NetworkFirst',
    options: {
      cacheName: 'firestore-cache',
      expiration: {
        maxEntries: 50,
        maxAgeSeconds: 24 * 60 * 60
      },
      networkTimeoutSeconds: 10
    }
  },
  {
    urlPattern: /^https:\/\/storage\.googleapis\.com\/.*/i,
    handler: 'CacheFirst',
    options: {
      cacheName: 'firebase-storage-cache',
      expiration: {
        maxEntries: 100,
        maxAgeSeconds: 7 * 24 * 60 * 60
      }
    }
  },
  {
    urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
    handler: 'CacheFirst',
    options: {
      cacheName: 'image-cache',
      expiration: {
        maxEntries: 200,
        maxAgeSeconds: 30 * 24 * 60 * 60
      }
    }
  }
];

const withPWAFunc = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: isDev,
  runtimeCaching
});

const config = {
  reactStrictMode: true,
  experimental: {
    serverActions: true
  }
};

export default withPWAFunc(config);
