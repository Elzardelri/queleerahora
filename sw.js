// Qué leer ahora: permite abrir la app sin conexión después de la primera visita
var VERSION = 'qla-v2';
var PROPIOS = ['./', './manifest.webmanifest', './apple-touch-icon.png', './icon-192.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(PROPIOS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (llaves) {
    return Promise.all(llaves.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  // La página: primero la red, para recibir siempre la versión nueva; sin conexión, la copia guardada
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(function (r) {
      var copia = r.clone();
      caches.open(VERSION).then(function (c) { c.put('./index.html', copia); });
      return r;
    }).catch(function () {
      return caches.match('./index.html').then(function (r) { return r || caches.match('./'); });
    }));
    return;
  }
  // Íconos, librerías de la animación y tipografías: la copia guardada, y se renueva en segundo plano
  if (url.origin === self.location.origin || /cdnjs\.cloudflare\.com$|fonts\.googleapis\.com$|fonts\.gstatic\.com$/.test(url.hostname)) {
    e.respondWith(caches.open(VERSION).then(function (c) {
      return c.match(req).then(function (guardada) {
        var red = fetch(req).then(function (r) {
          if (r && (r.ok || r.type === 'opaque')) c.put(req, r.clone());
          return r;
        }).catch(function () { return guardada; });
        return guardada || red;
      });
    }));
  }
});
