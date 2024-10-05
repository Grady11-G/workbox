importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.routing.registerRoute(
  /\.(?:css|js)$/, 
  new workbox.stragies.staleWhileRevalidate({
    "cacheName":"assets",
    plugins:[
      new workbox.expiration.Plugin({
        maxEntries: 1000,
        maxAgeSeconds: 1800
  })
      ]
)
  );

workbox.routing.registerRoute(
  /\.(?:png|jpg|gif)$/, 
  new workbox.stragies.cacheFirst({
    "cacheName":"images",
    plugins:[
      new workbox.expiration.Plugin({
        maxEntries: 1000,
        maxAgeSeconds: 1800
  })
      ]
)
  );
