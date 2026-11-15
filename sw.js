// Qué leer ahora: el modo sin conexión se retiró. Este archivo solo borra lo que guardó la versión anterior y se da de baja.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (llaves) { return Promise.all(llaves.map(function (k) { return caches.delete(k); })); })
      .then(function () { return self.registration.unregister(); })
      .then(function () { return self.clients.matchAll({ type: 'window' }); })
      .then(function (ventanas) { ventanas.forEach(function (v) { try { v.navigate(v.url); } catch (err) {} }); })
  );
});
