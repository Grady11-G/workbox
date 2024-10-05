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
self.__precacheManifest = [
  {
    "url":"generator.js",
    "revision":"515d9caee3e3b6fa62da7056dbb7ad34"
  },
  {
    "url": "scripts.js",
    "revision":"6a60e571d4747b06c63819838ede516"
  }
  ].concat(self._preacheManifest || []);
workbox.routing registerRoute(/\.(?:html|htm|xml)$/, new workbox.strategies.StaleWhileRevalidate({"cacheName

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
