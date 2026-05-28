// sw.js
const CACHE_NAME = 'senninchat-v1';

const urlsToCache = [
    '/',
    '/account.html',
    '/manifest.webmanifest',
    'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap',
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded',
    'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
