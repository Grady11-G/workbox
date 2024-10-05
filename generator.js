const workbox = require ("workbox-build");

workbox.generateSW({
cacheId: "pwa_example", 
  globDirectory : "./",
  globPatterns:[
    "**/*.{css,js}"
    ],
  swDest: "./sw.js",
  runTimeCoaching: [
    {
      urlPatterson: /\.(?:html|htm|xml)$/,
      handler: "staleWhileRevalidate",
      options: {
        cacheName:"markup",
        expiration:{
          maxAgeSeconds: 1800
        }
      })
