'use strict';

const cacheVersion = '2018-10-15 18:00:44 +0000::';
const urlsToCache = [
  '/atom.xml','/browserconfig.xml','/','/manifest.json','/robots.txt','/sitemap.xml','/sw.js',
  
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheVersion + 'static').then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
  return self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.indexOf(cacheVersion) !== 0;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cacheVersion + 'static').then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      }).catch(function() {
        return caches.match('/404')
      });
    })
  );
});
